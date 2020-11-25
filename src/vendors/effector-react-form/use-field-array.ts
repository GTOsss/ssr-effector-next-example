import { ReactNode, useCallback, useRef } from 'react';
import { useStore, useEvent } from 'effector-react/ssr';
import { AnyState, FieldArrayParams, MapFieldArrayCallback, ResultUseFieldArray } from './ts';
import { getIn } from './utils/object-manager';

const useFieldArray = <Values = AnyState>({ fieldArray, name }: FieldArrayParams<Values>): ResultUseFieldArray => {
  const refName = useRef(name);
  refName.current = name;

  const {
    form: { $values },
    push,
    remove,
  } = fieldArray;

  const events = {} as any;
  events.push = useEvent(push);
  events.remove = useEvent(remove);

  const values = useStore($values);

  const map = useCallback<(fn: MapFieldArrayCallback) => ReactNode[]>(
    (callback: MapFieldArrayCallback) => {
      const results = [];
      const fields = getIn(values, refName.current, []) as any[];
      fields.forEach((field, index) => {
        const callbackResult = callback({
          formItemName: `${refName.current}.${index}`,
          fields,
          field,
          index,
        });
        results.push(callbackResult);
      });
      return results;
    },
    [values],
  ); // todo Fix type

  return {
    map,
    remove: (index: number) => events.remove({ fieldName: refName.current, index }),
    push: (value: any | any[]) => events.push({ fieldName: refName.current, value }),
  };
};

export default useFieldArray;
