import * as React from 'react';
import { Ability } from '../../types/resume';
import List from '../List/List';

type AbilitiesProps = {
  abilities: Ability[];
};

const Abilities: React.FunctionComponent<AbilitiesProps> = ({ abilities }) => {
  return (
    <>
      {abilities.map((ability, index) => {
        return (
          <List key={index} title={ability.category} items={ability.skills} />
        );
      })}
    </>
  );
};

export default Abilities;
