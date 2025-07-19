const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const medalsApiUrl = `${basePath}/mock/medals.json`;
console.log("Runtime medalsApiUrl:", medalsApiUrl);