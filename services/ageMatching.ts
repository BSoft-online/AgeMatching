export const getAge = async (name: string): Promise<string> => {
    const response = await fetch(`https://api.agify.io/?name=${name}`, {
        method: 'GET',
    });
    const result = await response.json();
    return result && result.age ? result.age.toString() : 'Error';
};
