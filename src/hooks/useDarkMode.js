import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (key, initalValue) => {
    const [value, setValue] = useLocalStorage(key, initalValue);

    useEffect(() => {
        if (value === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [value])

    return [value, setValue];
}

export default useDarkMode;