import jquery from 'jquery';

(window as any).jQuery = jquery;

// Colors
export { COLORS } from './colors';

// Hooks
export { useKeyPress } from './hooks/useKeyPress';
export { useSlot } from './hooks/useSlot';

// Helpers
export { convertToHtml } from './helpers/convertToHtml';

// Components
export { Alert } from './components/Alert/Alert';
export { AlertProps, AlertType } from './components/Alert/Alert.types';
export { Avatar, AvatarProps } from './components/Avatar/Avatar';
export { Accordion } from './components/Accordion/Accordion';
export {
	AccordionActions,
	AccordionBody,
	AccordionTitle,
} from './components/Accordion/Accordion.slots';
export { AvatarIcon } from './components/Avatar/AvatarIcon/AvatarIcon';
export { AvatarList } from './components/AvatarList/AvatarList';
export { Badge } from './components/Badge/Badge';
export { Blankslate } from './components/Blankslate/Blankslate';
export { Box } from './components/Box/Box';
export { Button } from './components/Button/Button';
export { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
export { ButtonToolbar } from './components/ButtonToolbar/ButtonToolbar';
export { Checkbox } from './components/Checkbox/Checkbox';
export { CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup';
export { Container } from './components/Container/Container';
export { CTA } from './components/CTA/CTA';
export { BlockIframe, BlockIframeProps } from './components/ContentBlocks/BlockIframe/BlockIframe';
export { BlockImage, BlockImageProps } from './components/ContentBlocks/BlockImage/BlockImage';
export {
	BlockImageTitleTextButton,
	BlockImageTitleTextButtonProps,
} from './components/ContentBlocks/BlockImageTitleTextButton/BlockImageTitleTextButton';
export { BlockLinks, BlockLinksProps } from './components/ContentBlocks/BlockLinks/BlockLinks';
export { BlockQuote, BlockQuoteProps } from './components/ContentBlocks/BlockQuote/BlockQuote';
export {
	BlockTitleImageText,
	BlockTitleImageTextProps,
} from './components/ContentBlocks/BlockTitleImageText/BlockTitleImageText';
export { BlockVideo, BlockVideoProps } from './components/ContentBlocks/BlockVideo/BlockVideo';
export {
	BlockVideoTitleTextButton,
	BlockVideoTitleTextButtonProps,
} from './components/ContentBlocks/BlockVideoTitleTextButton/BlockVideoTitleTextButton';
export { DatePicker } from './components/DatePicker/DatePicker';
export { Dropdown, DropdownProps } from './components/Dropdown/Dropdown';
export { DropdownButton, DropdownContent } from './components/Dropdown/Dropdown.slots';
export { ExpandableContainer } from './components/ExpandableContainer/ExpandableContainer';
export { Flex } from './components/Flex/Flex';
export { FlexItem } from './components/Flex/FlexItem/FlexItem';
export { FlowPlayer } from './components/FlowPlayer/FlowPlayer';
export { Form } from './components/Form/Form';
export { FormGroup } from './components/Form/FormGroup/FormGroup';
export { Column } from './components/Grid/Column/Column';
export { Grid } from './components/Grid/Grid';
export { Header } from './components/Header/Header';
export { HeaderAvatar, HeaderButtons, HeaderTags } from './components/Header/Header.slots';
export { HeaderContentType } from './components/HeaderContentType/HeaderContentType';
export { Icon } from './components/Icon/Icon';
export { IconName, IconType } from './components/Icon/types';
export { Image } from './components/Image/Image';
export { ImageGrid } from './components/ImageGrid/ImageGrid';
export { MediaCard } from './components/MediaCard/MediaCard';
export { MediaCardMetaData, MediaCardThumbnail } from './components/MediaCard/MediaCard.slots';
export { Menu } from './components/Menu/Menu';
export { MenuContent, MenuItemInfo } from './components/Menu/MenuContent/MenuContent';
export {
	MenuSearchResultContent,
	MenuSearchResultItemInfo,
} from './components/Menu/MenuSearchResultContent/MenuSearchResultContent';
export { MetaData } from './components/MetaData/MetaData';
export { MetaDataItem } from './components/MetaData/MetaDataItem/MetaDataItem';
export { Modal } from './components/Modal/Modal';
export {
	ModalBody,
	ModalFooterLeft,
	ModalFooterRight,
	ModalHeaderRight,
} from './components/Modal/Modal.slots';
export { MultiRange } from './components/MultiRange/MultiRange';
export { Navbar } from './components/Navbar/Navbar';
export { Pagination } from './components/Pagination/Pagination';
export { Panel } from './components/Panel/Panel';
export { PanelBody, PanelHeader } from './components/Panel/Panel.slots';
export { RadioButton } from './components/RadioButton/RadioButton';
export { RadioButtonGroup } from './components/RadioButtonGroup/RadioButtonGroup';
export { SearchResult } from './components/SearchResult/SearchResult';
export {
	SearchResultSubtitle,
	SearchResultThumbnail,
	SearchResultTitle,
} from './components/SearchResult/SearchResult.slots';
export { Select, SelectOption } from './components/Select/Select';
export { Spacer } from './components/Spacer/Spacer';
export { Spinner } from './components/Spinner/Spinner';
export { Table, TableColumn } from './components/Table/Table';
export { Tab, TabProps } from './components/Tabs/Tab/Tab';
export { Tabs } from './components/Tabs/Tabs';
export { TagList, TagOption } from './components/TagList/TagList';
export { TagInfo, TagsInput } from './components/TagsInput/TagsInput';
export { TextArea } from './components/TextArea/TextArea';
export { TextInput } from './components/TextInput/TextInput';
export { Thumbnail } from './components/Thumbnail/Thumbnail';
export { Toggle } from './components/Toggle/Toggle';
export { ToggleButton } from './components/ToggleButton/ToggleButton';
export { Toolbar } from './components/Toolbar/Toolbar';
export { ToolbarCenter, ToolbarLeft, ToolbarRight } from './components/Toolbar/Toolbar.slots';
export { ToolbarItem } from './components/Toolbar/ToolbarItem/ToolbarItem';
export { ToolbarTitle } from './components/Toolbar/ToolbarTitle/ToolbarTitle';
export { Tooltip } from './components/Tooltip/Tooltip';
export { TooltipContent, TooltipTrigger } from './components/Tooltip/Tooltip.slots';
export { VideoWrapper } from './components/VideoWrapper/VideoWrapper';
export { WYSIWYG } from './components/WYSIWYG/WYSIWYG';

// Content Blocks
export { BlockHeading, BlockHeadingProps } from './content-blocks/BlockHeading/BlockHeading';
export { BlockIntro, BlockIntroProps } from './content-blocks/BlockIntro/BlockIntro';
export { BlockRichText, BlockRichTextProps } from './content-blocks/BlockRichText/BlockRichText';

// Types
export {
	Language,
	EnglishContentType,
	DutchContentType,
	ContentType,
	translateContentType,
} from './types';
