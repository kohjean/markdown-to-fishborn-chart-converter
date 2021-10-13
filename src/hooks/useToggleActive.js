import { useEffect } from 'react';

export const useToggleActive = (activateId, inactivateId) => {
  useEffect(() => {
    const activate = document.getElementById(activateId);
    const inactivate = document.getElementById(inactivateId);
    activate.addEventListener('click', () => {
      activate.classList.add('active');
      activate.classList.remove('inactive');
      inactivate.classList.remove('active');
      inactivate.classList.add('inactive');
    });
  }, []);
};
