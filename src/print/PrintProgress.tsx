/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import React from 'react';

import LocalizationContext from '../localization/LocalizationContext';
import ThemeContent from '../theme/ThemeContext';
import './printProgress.less';

interface PrintProgressProps {
    numLoadedPages: number;
    numPages: number;
    onCancel(): void;
    onStartPrinting(): void;
}

const PrintProgress: React.FC<PrintProgressProps> = ({ numLoadedPages, numPages, onCancel, onStartPrinting }) => {
    const l10n = React.useContext(LocalizationContext);
    const theme = React.useContext(ThemeContent);
    const progress = Math.floor(numLoadedPages * 100 / numPages);
    React.useEffect(() => {
        if (numLoadedPages === numPages) {
            onStartPrinting();
        }
    }, [numLoadedPages]);

    return (
        <div className={`${theme.prefixClass}-print-progress`}>
            <div className={`${theme.prefixClass}-print-progress-inner`}>
                <div className={`${theme.prefixClass}-print-progress-message`}>{l10n.printProgress.preparingDocument}</div>
                <div
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, .1)',
                        borderRadius: '9999px',
                        marginBottom: '16px',
                    }}
                >
                    <div
                        style={{
                            alignItems: 'center',
                            backgroundColor: '#357EDD',
                            borderRadius: '9999px',
                            color: '#fff',
                            display: 'flex',
                            fontSize: '10px',
                            justifyContent: 'center',
                            width: `${progress}%`,
                        }}
                    >
                        {progress}%
                    </div>
                </div>
                <button
                    style={{
                        backgroundColor: '#357EDD',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#FFF',
                        cursor: 'pointer',
                        padding: '8px',
                    }}
                    onClick={onCancel}
                >
                    {l10n.printProgress.cancel}
                </button>
            </div>
        </div>
    );
};

export default PrintProgress;
