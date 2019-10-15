import jquery from 'jquery';

(window as any).jQuery = jquery;

// Colors
import { COLORS } from './colors';

// Hooks
import { useKeyPress } from './hooks/useKeyPress';

// Components
import { Alert } from './components/Alert/Alert';
import { Avatar } from './components/Avatar/Avatar';
import { AvatarIcon } from './components/Avatar/AvatarIcon/AvatarIcon';
import { AvatarList } from './components/AvatarList/AvatarList';
import { Badge } from './components/Badge/Badge';
import { Blankslate } from './components/Blankslate/Blankslate';
import { Box } from './components/Box/Box';
import { Button } from './components/Button/Button';
import { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
import { ButtonToolbar } from './components/ButtonToolbar/ButtonToolbar';
import { Checkbox } from './components/Checkbox/Checkbox';
import { CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup';
import { Container } from './components/Container/Container';
import { BlockIframe, BlockIframeProps } from './components/ContentBlocks/BlockIframe/BlockIframe';
import { BlockImage, BlockImageProps } from './components/ContentBlocks/BlockImage/BlockImage';
import {
	BlockImageTitleTextButton,
	BlockImageTitleTextButtonProps,
} from './components/ContentBlocks/BlockImageTitleTextButton/BlockImageTitleTextButton';
import { BlockIntro, BlockIntroProps } from './components/ContentBlocks/BlockIntro/BlockIntro';
import { BlockLinks, BlockLinksProps } from './components/ContentBlocks/BlockLinks/BlockLinks';
import { BlockQuote, BlockQuoteProps } from './components/ContentBlocks/BlockQuote/BlockQuote';
import {
	BlockSubtitle,
	BlockSubtitleProps,
} from './components/ContentBlocks/BlockSubtitle/BlockSubtitle';
import { BlockText, BlockTextProps } from './components/ContentBlocks/BlockText/BlockText';
import { BlockTitle, BlockTitleProps } from './components/ContentBlocks/BlockTitle/BlockTitle';
import {
	BlockTitleImageText,
	BlockTitleImageTextProps,
} from './components/ContentBlocks/BlockTitleImageText/BlockTitleImageText';
import { BlockVideo, BlockVideoProps } from './components/ContentBlocks/BlockVideo/BlockVideo';
import {
	BlockVideoTitleTextButton,
	BlockVideoTitleTextButtonProps,
} from './components/ContentBlocks/BlockVideoTitleTextButton/BlockVideoTitleTextButton';
import { DatePicker } from './components/DatePicker/DatePicker';
import { DateTimePicker } from './components/DateTimePicker/DateTimePicker';
import { Dropdown } from './components/Dropdown/Dropdown';
import { DropdownButton, DropdownContent } from './components/Dropdown/Dropdown.slots';
import { ExpandableContainer } from './components/ExpandableContainer/ExpandableContainer';
import { Flex } from './components/Flex/Flex';
import { FlexItem } from './components/Flex/FlexItem/FlexItem';
import { FlowPlayer } from './components/FlowPlayer/FlowPlayer';
import { Form } from './components/Form/Form';
import { FormGroup } from './components/Form/FormGroup/FormGroup';
import { Column } from './components/Grid/Column/Column';
import { Grid } from './components/Grid/Grid';
import { Icon } from './components/Icon/Icon';
import { IconName, IconType } from './components/Icon/types';
import { Image } from './components/Image/Image';
import { ImageGrid } from './components/ImageGrid/ImageGrid';
import { MediaCard } from './components/MediaCard/MediaCard';
import { MediaCardMetaData, MediaCardThumbnail } from './components/MediaCard/MediaCard.slots';
import { Menu } from './components/Menu/Menu';
import { MenuContent, MenuItemInfo } from './components/Menu/MenuContent/MenuContent';
import {
	MenuSearchResultContent,
	MenuSearchResultItemInfo,
} from './components/Menu/MenuSearchResultContent/MenuSearchResultContent';
import { MetaData } from './components/MetaData/MetaData';
import { MetaDataItem } from './components/MetaData/MetaDataItem/MetaDataItem';
import { Modal } from './components/Modal/Modal';
import {
	ModalBody,
	ModalFooterLeft,
	ModalFooterRight,
	ModalHeaderRight,
} from './components/Modal/Modal.slots';
import { MultiRange } from './components/MultiRange/MultiRange';
import { Navbar } from './components/Navbar/Navbar';
import { Pagination } from './components/Pagination/Pagination';
import { Panel } from './components/Panel/Panel';
import { PanelBody, PanelHeader } from './components/Panel/Panel.slots';
import { RadioButton } from './components/RadioButton/RadioButton';
import { RadioButtonGroup } from './components/RadioButtonGroup/RadioButtonGroup';
import { SearchResult } from './components/SearchResult/SearchResult';
import {
	SearchResultSubtitle,
	SearchResultThumbnail,
	SearchResultTitle,
} from './components/SearchResult/SearchResult.slots';
import { Select, SelectOption } from './components/Select/Select';
import { Spacer } from './components/Spacer/Spacer';
import { Spinner } from './components/Spinner/Spinner';
import { Table } from './components/Table/Table';
import { Tab } from './components/Tabs/Tab/Tab';
import { Tabs } from './components/Tabs/Tabs';
import { TagList, TagOption } from './components/TagList/TagList';
import { TagInfo, TagsInput } from './components/TagsInput/TagsInput';
import { TextArea } from './components/TextArea/TextArea';
import { TextInput } from './components/TextInput/TextInput';
import { Thumbnail } from './components/Thumbnail/Thumbnail';
import { Toggle } from './components/Toggle/Toggle';
import { ToggleButton } from './components/ToggleButton/ToggleButton';
import { Toolbar } from './components/Toolbar/Toolbar';
import { ToolbarCenter, ToolbarLeft, ToolbarRight } from './components/Toolbar/Toolbar.slots';
import { ToolbarItem } from './components/Toolbar/ToolbarItem/ToolbarItem';
import { ToolbarTitle } from './components/Toolbar/ToolbarTitle/ToolbarTitle';
import { Tooltip } from './components/Tooltip/Tooltip';
import { TooltipContent, TooltipTrigger } from './components/Tooltip/Tooltip.slots';
import { VideoWrapper } from './components/VideoWrapper/VideoWrapper';
import { WYSIWYG } from './components/WYSIWYG/WYSIWYG';
import { convertToHtml } from './helpers/convertToHtml';
import { useSlot } from './hooks/useSlot';

export {
	COLORS,
	useKeyPress,
	useSlot,
	convertToHtml,
	Alert,
	Avatar,
	AvatarIcon,
	AvatarList,
	Badge,
	Blankslate,
	BlockIframe,
	BlockIframeProps,
	BlockImage,
	BlockImageProps,
	BlockImageTitleTextButton,
	BlockImageTitleTextButtonProps,
	BlockIntro,
	BlockIntroProps,
	BlockLinks,
	BlockLinksProps,
	BlockQuote,
	BlockQuoteProps,
	BlockSubtitle,
	BlockSubtitleProps,
	BlockText,
	BlockTextProps,
	BlockTitle,
	BlockTitleImageText,
	BlockTitleImageTextProps,
	BlockTitleProps,
	BlockVideo,
	BlockVideoProps,
	BlockVideoTitleTextButton,
	BlockVideoTitleTextButtonProps,
	Box,
	Button,
	ButtonGroup,
	ButtonToolbar,
	Checkbox,
	CheckboxGroup,
	Column,
	Container,
	DatePicker,
	DateTimePicker,
	Dropdown,
	DropdownButton,
	DropdownContent,
	ExpandableContainer,
	Flex,
	FlexItem,
	FlowPlayer,
	Form,
	FormGroup,
	Grid,
	Icon,
	IconName,
	IconType,
	Image,
	ImageGrid,
	MediaCard,
	MediaCardMetaData,
	MediaCardThumbnail,
	Menu,
	MenuContent,
	MenuItemInfo,
	MenuSearchResultContent,
	MenuSearchResultItemInfo,
	MetaData,
	MetaDataItem,
	Modal,
	ModalBody,
	ModalFooterLeft,
	ModalFooterRight,
	ModalHeaderRight,
	MultiRange,
	Navbar,
	Pagination,
	Panel,
	PanelBody,
	PanelHeader,
	RadioButton,
	RadioButtonGroup,
	SearchResult,
	SearchResultSubtitle,
	SearchResultThumbnail,
	SearchResultTitle,
	Select,
	SelectOption,
	Spacer,
	Spinner,
	Tab,
	Table,
	Tabs,
	TagList,
	TagOption,
	TagsInput,
	TagInfo,
	TextArea,
	TextInput,
	Thumbnail,
	Toggle,
	ToggleButton,
	Toolbar,
	ToolbarCenter,
	ToolbarItem,
	ToolbarLeft,
	ToolbarRight,
	ToolbarTitle,
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	WYSIWYG,
	VideoWrapper,
};
