import PouchDB from 'pouchdb-react-native'
class Chat {

    async join(user, room) {
        user = null
        room = null
        db = null

        this.user = user || 'Anonymous';
        this.room = room || 'général';

        try{
        this.db = new PouchDB();

        const response = await this.db.allDocs({
            include_docs: true
        });
        return response.rows.map(row => row.doc);

        }catch(e){
        console.error(e)
        }
    }
}

export const chatService = new chat();