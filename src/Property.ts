export type Property = {
    description: string,
    price: number,
    address: {
        neighborhood: string,
        city: string,
        state: {
            name: string,
            uf: string
        },
        country?: string
    },
    typeProperty: "sell" | "rent",
    type: string,
    images: Array<{
        name: string,
        link: string
    }>,
    characteristics: Array<{
        name: string,
        value: any
    }>
}
