import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode({ code }: RoomCodeProps) {

    function copyRoomCodeToClipBoard() {
        navigator.clipboard.writeText(code)
    }

    return (
        <button className="room-code" onClick={copyRoomCodeToClipBoard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala {code}</span>
        </button>
    )
}