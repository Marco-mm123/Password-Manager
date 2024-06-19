import generator from 'generate-password';

export const generatePassword = () => {
    return generator.generate({
        length: 15,
        numbers: true,
        symbols: true,
        uppercase: true,
        lowercase: true
    });
}