import { OrbitControls } from '@react-three/drei'
import { Physics, Debug } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import Lights from './Lights.js'
import { Level } from './Level.js'
import Player from './Player.js'
import useGame from './stores/useGame.js'
import Effects from './Effects.js'


export default function Experience()
{
    const blocksCount = useGame((state) => state.blocksCount)
    const blocksSeed = useGame(state => state.blocksSeed)


    return <>

        <Perf position="top-left"/>
        {/* PERF GUI */}
        <color args={ [ '#252731' ] } attach="background" />        
        {/* <OrbitControls makeDefault /> */}

    <Physics>
        {/* <Debug /> */}
        <Lights />
        <Level count={ blocksCount } seed={ blocksSeed }/>
        <Player />
    </Physics>
    <Effects />

    </>
}