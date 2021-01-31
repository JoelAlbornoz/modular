import { Player } from "./player";

export interface Cell {
    'contents':{
        'entities':any,
        'players':Array<Player>,
        'objects':any
    }
}
