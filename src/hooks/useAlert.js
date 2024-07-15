import { useState } from 'react';

/**
 * A custom hook for managing alert state.
 * 
 * @returns {Object} An object containing the alert state and functions to show and hide the alert.
 * @returns {Object} return.alert The current alert state.
 * @returns {boolean} return.alert.show Indicates whether the alert is currently shown.
 * @returns {string} return.alert.text The text of the alert.
 * @returns {string} return.alert.type The type of the alert (e.g., 'danger', 'success').
 * @returns {Function} return.showAlert A function to show the alert.
 * @returns {Function} return.hideAlert A function to hide the alert.
 */
const useAlert = () => {
    /**
     * The state object for the alert.
     * 
     * @typedef {Object} AlertState
     * @property {boolean} show Indicates whether the alert is currently shown.
     * @property {string} text The text of the alert.
     * @property {string} type The type of the alert (e.g., 'danger', 'success').
     */
    const [alert, setAlert] = useState({
        show: false,
        text: '',
        type: 'danger'
    });

    /**
     * Shows the alert with the specified text and type.
     * 
     * @param {Object} params The parameters for showing the alert.
     * @param {string} params.text The text of the alert.
     * @param {string} [params.type='danger'] The type of the alert. Defaults to 'danger'.
     */
    const showAlert = ({ text, type = 'danger' }) => setAlert({
        show: true,
        text,
        type
    });

    /**
     * Hides the alert and resets its state.
     */
    const hideAlert = () => setAlert({
        show: false,
        text: '',
        type: 'danger'
    });

    return { alert, showAlert, hideAlert };
};

export default useAlert;
