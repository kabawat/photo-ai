// "use client"
import { isMobile } from 'react-device-detect';
const Device = () => {
    if (isMobile) {
        return <div> This content is available only on mobile</div>
    } else {
        return <div> content </div>
    }
}
export default Device