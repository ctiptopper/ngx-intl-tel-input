/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import { RefObject } from 'react';

import SelectionMode from './SelectionMode';

interface StoreProps {
    getPagesRef?(): RefObject<HTMLDivElement>;
    selectionMode: SelectionMode;
}

export default StoreProps;
