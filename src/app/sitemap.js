export default async function sitemap(params) {
    return[
        {
            url:`${process.env.NEXT_PUBLIC_BASE_URL}`
        }
    ]
}