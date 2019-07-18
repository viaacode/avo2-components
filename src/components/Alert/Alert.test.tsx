// import { mount, shallow } from 'enzyme';
// import React from 'react';
// import {
// 	AlertProviderProps,
// 	positions,
// 	Provider as AlertProvider,
// 	transitions,
// 	useAlert,
// } from 'react-alert';
//
// import { Button } from '../Button/Button';
// import { Alert } from './Alert';
//
// import { Download, Slash, ThumbsUp } from '../Icons';
//
// const alertOptions: Partial<AlertProviderProps> = {
// 	position: positions.BOTTOM_LEFT,
// 	timeout: 7000,
// 	offset: '1.2rem',
// 	transition: transitions.FADE,
// };
//
// describe('<Icon />', () => {
// 	const alert = useAlert();
//
// 	it('Should render when a known icon is passed', () => {
// 		const iconComponent = mount(
// 			<AlertProvider template={Alert as any} {...alertOptions}>
// 				<Button
// 					label="Show info alert"
// 					onClick={() => {
// 						alert.show('test alert', { type: 'info' });
// 					}}
// 				/>
// 			</AlertProvider>
// 		);
//
// 		expect(iconComponent.find(Download)).toHaveLength(1);
// 	});
//
// 	it('Should render slash icon when an unknown icon name is passed', () => {
// 		const iconComponent = shallow(<Alert name="foobar" />);
//
// 		expect(iconComponent.find(Slash)).toHaveLength(1);
// 	});
//
// 	it('Should render icon when name was passed as PascalCase', () => {
// 		const iconComponent = mount(<Alert name="ThumbsUp" />);
//
// 		expect(iconComponent.find(ThumbsUp)).toHaveLength(1);
// 	});
//
// 	it('Should render icon when name was passed as kebab-case', () => {
// 		const iconComponent = mount(<Alert name="thumbs-up" />);
//
// 		expect(iconComponent.find(ThumbsUp)).toHaveLength(1);
// 	});
//
// 	it('Should correctly set the className without type', () => {
// 		const iconComponent = shallow(<Alert name="download" />);
//
// 		expect(iconComponent.hasClass('o-svg-icon')).toEqual(true);
// 		expect(iconComponent.hasClass('o-svg-icon--download')).toEqual(true);
// 	});
//
// 	it('Should correctly set the className with type', () => {
// 		const socialIconComponent = shallow(<Alert name="twitter" type="social" />);
// 		const multicolorIconComponent = shallow(<Alert name="circle-check" type="multicolor" />);
//
// 		expect(socialIconComponent.hasClass('o-svg-icon-social-twitter')).toEqual(true);
// 		expect(multicolorIconComponent.hasClass('o-svg-icon-multicolor')).toEqual(true);
// 	});
//
// 	it('Should correctly set the sizing className', () => {
// 		const smallIconComponent = shallow(<Alert name="circle-check" size="small" />);
// 		const largeIconComponent = shallow(<Alert name="circle-check" size="large" />);
// 		const hugeIconComponent = shallow(<Alert name="circle-check" size="huge" />);
//
// 		expect(smallIconComponent.hasClass('o-svg-icon--small')).toEqual(true);
// 		expect(largeIconComponent.hasClass('o-svg-icon--large')).toEqual(true);
// 		expect(hugeIconComponent.hasClass('o-svg-icon--huge')).toEqual(true);
// 	});
//
// 	it('Should correctly set the className when active', () => {
// 		const activeIconComponent = shallow(<Alert name="circle-check" active={true} />);
// 		const inactiveIconComponent = shallow(<Alert name="circle-check" active={false} />);
//
// 		expect(activeIconComponent.hasClass('o-svg-icon--action-active')).toEqual(true);
// 		expect(inactiveIconComponent.hasClass('o-svg-icon--action-active')).toEqual(false);
// 	});
// });
