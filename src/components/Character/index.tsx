import * as C from './style';

import { CharacterSides } from '../../types/characterSides';


type Props = {
    x: number;
    y: number;
    side: CharacterSides,
    name: string
}

export const Character = ({x,y,side, name}:Props) => {

    const size = 30;

    const sides = {
      down: 0,
      left: -30,
      right: -60,
      up: -90
  }
  

  return (


    <C.Container
    
    left = {x * size}
    top = {y*size}
    size = {size}
    sidePos={sides[side] ?? 0}
    >

    <C.NameBox>{name}</C.NameBox>

        
    </C.Container>
    
  );

}

