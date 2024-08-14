export class databaseMock {
    constructor(comment,make,improvment){
this.comment=comment
this.make=make
this.improvment=improvment
 }
}

const mockTastDB = [
    new databaseMock (
    "dado conceitual teste Coment",
    "dado conceitual teste make",
    "dado conceitual teste improvment"
)
]

export{mockTastDB}