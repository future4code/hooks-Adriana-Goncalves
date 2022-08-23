// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 

const returnName = (name: string, birthDate: string) => {
    const dateSeparete =  birthDate.split("/")
    return `Olá me chamo ${name}, nasci no dia ${dateSeparete[0]} do mês de ${dateSeparete[1]} do ano de ${dateSeparete[2]}`
  }

  console.log(returnName("Adriane", "20/05/1997"))