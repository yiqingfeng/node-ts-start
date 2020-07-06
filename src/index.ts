import utils from './utils';

utils.cpExec('echo "hello"');

export function hi(name: string): string {
  return `hi, ${name}!`;
}
