const formateDateLocale = async () => {
    const dateUTC = new Date(Date.now());
    const year = dateUTC.getFullYear();
    const month = String(dateUTC.getMonth() + 1).padStart(2, '0');
    const day = String(dateUTC.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
};

export { formateDateLocale };
