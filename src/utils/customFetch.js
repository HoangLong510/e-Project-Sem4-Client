export default async function customFetch(url, options = {}) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}` + url,
            {
                ...options,
                credentials: 'include'
            })

        const res = await response.json()

        if (!res) {
            return {
                success: false,
                errors: { server: true },
                message: "ServerIsBusy"
            }
        }

        return res

    } catch (error) {
        return {
            success: false,
            errors: { server: true },
            message: "ServerIsBusy"
        }
    }
}