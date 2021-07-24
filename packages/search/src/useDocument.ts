/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2021 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import * as React from 'react';
import type { PdfJs, Store, StoreHandler } from '@react-pdf-viewer/core/lib';

import StoreProps from './types/StoreProps';

const useDocument = (store: Store<StoreProps>): React.MutableRefObject<PdfJs.PdfDocument> => {
    // We use a _ref_ here to track the current document instead of `useState`
    // Because `useDocument` is used directly in `searchPlugin`, it can cause a re-render
    const currentDocRef = React.useRef(store.get('doc'));

    const handleDocumentChanged: StoreHandler<PdfJs.PdfDocument> = (doc: PdfJs.PdfDocument) => {
        currentDocRef.current = doc;
    };

    React.useEffect(() => {
        store.subscribe('doc', handleDocumentChanged);

        return () => {
            store.unsubscribe('doc', handleDocumentChanged);
        };
    }, []);

    return currentDocRef;
};

export default useDocument;
