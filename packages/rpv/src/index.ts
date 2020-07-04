/**
 * A React component to view a PDF document
 *
 * @see https://react-pdf-viewer.dev
 * @license https://react-pdf-viewer.dev/license
 * @copyright 2019-2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

import Button from './components/Button';
import MenuDivider from './components/MenuDivider';
import MenuItem from './components/MenuItem';
import PrimaryButton from './components/PrimaryButton';
import ProgressBar from './components/ProgressBar';
import Separator from './components/Separator';
import Spinner from './components/Spinner';
import Icon from './icons/Icon';
import defaultLayout from './layouts/defaultLayout';
import defaultToolbar from './layouts/defaultToolbar';
import LocalizationContext from './localization/LocalizationContext';
import LocalizationProvider from './localization/LocalizationProvider';
import Modal from './portal/Modal';
import Popover from './portal/Popover';
import Position from './portal/Position';
import Tooltip from './portal/Tooltip';
import ScrollMode from './ScrollMode';
import SelectionMode from './SelectionMode';
import SpecialZoomLevel from './SpecialZoomLevel';
import createStore, { Store as StoreType, StoreHandler as StoreHandlerType } from './store/createStore';
import Viewer from './Viewer';
import Worker from './Worker';

export default Viewer;
export {
    Button,
    createStore,
    defaultLayout,
    defaultToolbar,
    Icon,
    LocalizationContext,
    LocalizationProvider,
    MenuDivider,
    MenuItem,
    Modal,
    Popover,
    Position,
    PrimaryButton,
    ProgressBar,
    ScrollMode,
    SelectionMode,
    Separator,
    SpecialZoomLevel,
    Spinner,
    Tooltip,
    Worker,
};

// -----
// Icons
// -----

export { default as NextIcon } from './icons/NextIcon';
export { default as PreviousIcon } from './icons/PreviousIcon';

// -----
// Types
// -----

import { Toggle as ToggleType } from './hooks/useToggle';

import { default as LocalizationMapType } from './localization/LocalizationMap';
import { Plugin as PluginType, PluginOnDocumentLoad as PluginOnDocumentLoadType } from './types/Plugin';
import { PluginFunctions as PluginFunctionsType } from './types/PluginFunctions';
import { ViewerState as ViewerStateType } from './types/ViewerState';

export type LocalizationMap = LocalizationMapType;
export type Toggle = ToggleType;
export type Store<T> = StoreType<T>;
export type StoreHandler<T> = StoreHandlerType<T>;
export type Plugin = PluginType;
export type PluginFunctions = PluginFunctionsType;
export type PluginOnDocumentLoad = PluginOnDocumentLoadType;
export type ViewerState = ViewerStateType;
