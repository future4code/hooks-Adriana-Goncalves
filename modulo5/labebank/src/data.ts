// Crie um tipo para representar uma conta para o usuário
// Crie mais um tipo: para representar as transações que serão salvas no extrato

export type Account = {
    id: string,
    name: string,
    cpf: string,
    birthDate:string,
    balance: number,
    extract: Transaction[]

}

export type Transaction= {
    value: number,
    date:string,
    description: string
}