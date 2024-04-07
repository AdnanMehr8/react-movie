const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7bd318f0bbf66eb56a76f558afb813d7',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;