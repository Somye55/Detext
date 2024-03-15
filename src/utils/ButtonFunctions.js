

export const ButtonFunctions = ({ textData, triggerTextUpdate, triggerFilteredData }) => {
    const Symspace = () => {
        const regex = /[A-Za-z0-9]/g;
        const strin = textData.match(regex).join('');
        triggerTextUpdate(strin);
        // ShowAlert('Removed symbols and whitespaces', 'success');
    };
    const ExtraSpace = () => {
        triggerTextUpdate(textData.split(/[ ]+/).join(' '));
        // ShowAlert('Extra spaces removed', 'success');
    };
    const Reset = () => {
        triggerTextUpdate('');
        // ShowAlert('Text Cleared', 'success');
    };
    const toLoCase = () => {
        triggerTextUpdate(textData.toLowerCase());
        // ShowAlert('Converted to Lower Case', 'success');
    };
    const toUpCase = () => {
        triggerTextUpdate(textData.toUpperCase());
        // ShowAlert('Converted to Uppercase', 'success');
    };
    const fetchEmails = () => {
        const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z|a-z]{2,}\b/gi;
        const emails = textData.match(emailRegex);
        triggerFilteredData(emails ? emails.join(', ') : '');
    };
    const fetchPhoneNumbers = () => {
        const phoneRegex = /(?:\+91|0)?[789]\d{9}/g;
        const phones = textData.match(phoneRegex);
        console.log(phones);
        triggerFilteredData(phones ? phones.join(', ') : '');
    };
    const fetchUrls = () => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const urls = textData.match(urlRegex);
        triggerFilteredData(urls ? urls.join(', ') : '');
    };
    const fetchHashtags = () => {
        const hashtagRegex = /#\w+/g;
        const hashtags = textData.match(hashtagRegex);
        triggerFilteredData(hashtags ? hashtags.join(', ') : '');
    };
return [
    Symspace,
    ExtraSpace,
    Reset,
    toLoCase,
    toUpCase,
    fetchEmails,
    fetchPhoneNumbers,
    fetchUrls,
    fetchHashtags
]
}
