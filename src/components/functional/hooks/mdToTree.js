/**
 *
 * @param {array} mdLines
 * @returns
 */

export const mdToTree = (mdLines) => {
  const _data = setInfoEachElem(mdLines);
  function countSpace(line) {
    const regex = /^[\s\t]+/;
    const origLen = line.length;
    const trimedLen = line.replace(regex, '').length;
    return origLen - trimedLen;
  }

  function filteredMdList(rows) {
    const filter = /^[\s\t]*?[*+-]\s/;
    return rows.filter((row) => row.match(filter));
  }

  function setInfoEachElem(md) {
    const rows = filteredMdList(md);
    let result = [];
    rows.reduce(
      (acc, row, idx) => {
        // stackは要素がどの親に所属するか記憶する為に使う
        const { stack, prevDepth } = acc;
        const currentDepth = Math.ceil(countSpace(row) / 2); // 空白2つで1つのインデントとみなす
        const text = row.replace(/^[\s\t]*?[*+-]\s/, '');
        // インデントの深さが上がったらstackに親のindexを入れる
        if (currentDepth > prevDepth) {
          stack.push(idx - 1);
        }

        if (currentDepth < prevDepth) {
          for (let i = prevDepth - currentDepth; i > 0; i--) {
            stack.pop();
          }
        }

        const parentId = idx === 0 ? null : stack[stack.length - 1];
        const obj = {
          id: idx,
          depth: currentDepth,
          parentId: parentId,
          content: text,
        };
        result.push(obj);
        return { stack: stack, prevDepth: currentDepth };
      },
      { stack: [0], prevDepth: 0 },
    );
    return result;
  }

  function listToTree(data) {
    const [tree] = data.reduce(
      ([arr, map], e) => {
        const node = {
          text: e.content,
          depth: e.depth,
          id: e.id,
          children: [],
        };
        if (e.parentId === null) {
          arr.push(node);
        } else if (map[e.parentId]) {
          map[e.parentId].children.push(node);
        }
        map[e.id] = node;
        return [arr, map];
      },
      [[], []],
    );
    return tree[0];
  }

  return listToTree(_data);
};
