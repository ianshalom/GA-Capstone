import db from '../db/index';


//Reference to the document belonging to this user Id

export const createRef = (collection, docId) => db.doc(`${collection}/` + docId)

export * from './services'
export * from'./auth'
export * from './offers'
export * from './collaboration'