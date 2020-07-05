import React from 'react';
import Viewer, { LocalizationMap, LocalizationProvider, Worker } from '@phuocng/rpv';
import currentPagePlugin from '@phuocng/rpv-current-page';
import localeSwitcherPlugin from '@phuocng/rpv-locale-switcher';
import nextPagePlugin from '@phuocng/rpv-next-page';
import previousPagePlugin from '@phuocng/rpv-previous-page';

import '@phuocng/rpv/cjs/react-pdf-viewer.css';

import vi_VN from './vi_VN.json';

const currentPage = currentPagePlugin();
const localeSwitcher = localeSwitcherPlugin();
const nextPage = nextPagePlugin();
const previousPage = previousPagePlugin();

const { CurrentPageLabel } = currentPage;
const { LocalePopover } = localeSwitcher;
const { NextPageButton } = nextPage;
const { PreviousPageButton } = previousPage;

const vietnameseLocalization = ((vi_VN as any) as LocalizationMap);

const App = () => {
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.js">
            <LocalizationProvider>
            { (updateLocalization) => (
                <>
                <div style={{ display: 'flex' }}>
                    <PreviousPageButton />
                    <CurrentPageLabel />
                    <NextPageButton />
                    <LocalePopover
                        locales={{
                            'vi_VN': 'Tiếng Việt',
                            'en_US': 'English',
                        }}
                        localizations={{
                            'vi_VN': vietnameseLocalization
                        }}
                        onUpdateLocalization={updateLocalization}
                    />
                </div>
                <div style={{ height: '750px', padding: '16px 0' }}>
                    <Viewer
                        fileUrl="/pdf-open-parameters.pdf"
                        // localization={vietnameseLocalization}
                        plugins={[
                            currentPage,
                            localeSwitcher,
                            nextPage,
                            previousPage,
                        ]}
                    />
                </div>
                </>
            )}
            </LocalizationProvider>
        </Worker>
    );
};

export default App;
