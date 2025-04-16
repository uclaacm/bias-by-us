// This doesn't work...
// ref: https://github.com/inrupt/solid-ui-react/issues/749

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
