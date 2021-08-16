export interface IState {
    buttonComponent: {
        onClick? : () => void,
        margin: string,
        text: string,
        color: string,
        fontColor: string,
        className?: string
    },
    buttonStyleComponent: {
        margin : string,
        color : string,
        fontColor: string
    },
    cardComponent: {
        name: string,
        nickname?: string,
        onClick? : () => void,
        image: string
    },
    pokemonCardMap: {
        id: number,
        name: string,
        image: string
    },
    pokemonTypeMap: {
        type: {
            name: string
        }
    },
    pokemonMoveMap: {
        move: {
            name: string
        }
    },
    myPokemonState: {
        id: number,
        name: string,
        nickname: string,
        image: string
    }[]
}
