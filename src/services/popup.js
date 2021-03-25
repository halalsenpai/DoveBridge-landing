import { message } from 'antd';
const success = (text) => {
    message.success(text);
};

const error = (text) => {
    message.error(text);
};

const warning = (text) => {
    message.warning(text);
};

export { success, error, warning };