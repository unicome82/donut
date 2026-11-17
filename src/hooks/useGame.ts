import { useReducer } from 'react';
import { createSession, reduceSession } from '../game/session';

export function useGame() {
  const [session, dispatch] = useReducer(reduceSession, undefined, createSession);
  return { session, dispatch };
}
