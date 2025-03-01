export const load = async ({ url, route }) => {
    const path = url.pathname;
    const slug = path.split('/').filter(Boolean).pop();

    return {
        url: url.href,
        slug
    };
};

export const prerender = true;
