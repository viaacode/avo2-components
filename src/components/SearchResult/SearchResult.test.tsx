import { mount, shallow } from 'enzyme';
import React, { cloneElement } from 'react';

import { Thumbnail } from '../Thumbnail/Thumbnail';
import { SearchResult } from './SearchResult';
import {
	SearchResultSubtitle,
	SearchResultThumbnail,
	SearchResultTitle,
} from './SearchResult.slots';
import { fakeSearchResult } from './SearchResult.stories';

const searchResult = (
	<SearchResult
		type={fakeSearchResult.administrative_type as 'collection' | 'video' | 'audio'}
		date={fakeSearchResult.dcterms_issued}
		viewCount={41}
		bookmarkCount={12}
		description={fakeSearchResult.dcterms_abstract}
		tags={['Redactiekeuze', 'Partner']}
	>
		<SearchResultTitle>
			<a className="title-link" href={`detail/${fakeSearchResult.pid}`}>
				{fakeSearchResult.dc_title}
			</a>
		</SearchResultTitle>
		<SearchResultSubtitle>
			<a
				className="subtitle-link"
				href={`search?filters={'provider':['${fakeSearchResult.original_cp}']}`}
			>
				{fakeSearchResult.original_cp}
			</a>
		</SearchResultSubtitle>
		<SearchResultThumbnail>
			<a className="thumbnail-link" href={`detail/${fakeSearchResult.pid}`}>
				<Thumbnail
					category={fakeSearchResult.administrative_type as any}
					src={fakeSearchResult.thumbnail_path}
					label={fakeSearchResult.administrative_type}
					meta={
						fakeSearchResult.administrative_type === 'video' ||
						fakeSearchResult.administrative_type === 'audio'
							? fakeSearchResult.fragment_duration_time
							: '25 items'
					}
				/>
			</a>
		</SearchResultThumbnail>
	</SearchResult>
);

describe('<SearchResult />', () => {
	it('Should be able to render', () => {
		shallow(searchResult);
	});

	it('Should set the correct className', () => {
		const searchResultComponent = mount(searchResult);

		const searchResultElement = searchResultComponent.childAt(0);

		// expect(searchResultElement.hasClass('c-search-result')).toBe(true); // Doesn't work
		expect(searchResultElement.html()).toMatch(/^<div class="c-search-result">.*/);
	});

	it('Should render Thumbnail component', () => {
		const searchResultComponent = mount(searchResult);

		const thumbnailElement = searchResultComponent.find('.c-thumbnail');

		expect(thumbnailElement).toHaveLength(1);
	});

	it('Should be able to render a SearchResultTitle-slot', () => {
		const SearchResultComponent = shallow(searchResult);

		const slotContentElement = SearchResultComponent.find('.title-link');

		expect(slotContentElement).toHaveLength(1);
	});

	it('Should be able to render a SearchResultSubtitle-slot', () => {
		const SearchResultComponent = shallow(searchResult);

		const slotContentElement = SearchResultComponent.find('.subtitle-link');

		expect(slotContentElement).toHaveLength(1);
	});

	it('Should be able to render a SearchResultThumbnail-slot', () => {
		const SearchResultComponent = shallow(searchResult);

		const slotContentElement = SearchResultComponent.find('.thumbnail-link');

		expect(slotContentElement).toHaveLength(1);
	});

	it('Should call onToggle when clicking bookmark', () => {
		const onToggleBookmark = jest.fn();

		const SearchResultComponent = mount(cloneElement(searchResult, { onToggleBookmark }));

		const buttonElement = SearchResultComponent.find('.c-button--borderless');

		buttonElement.simulate('click');

		expect(onToggleBookmark).toHaveBeenCalled();
		expect(onToggleBookmark).toHaveBeenCalledTimes(1);
		expect(onToggleBookmark).toHaveBeenCalledWith(true);

		buttonElement.simulate('click');

		expect(onToggleBookmark).toHaveBeenCalledTimes(2);
		expect(onToggleBookmark).toHaveBeenCalledWith(false);
	});

	// type={fakeSearchResult.administrative_type as 'collection' | 'video' | 'audio'}
	// date={fakeSearchResult.dcterms_issued}
	// description={fakeSearchResult.dcterms_abstract}
	// duration={fakeSearchResult.fragment_duration_time}
	// numberOfItems={25}
	// tags={['Redactiekeuze', 'Partner']}

	it('Should render type param correctly', () => {
		const VideoSearchResultComponent = mount(cloneElement(searchResult, { type: 'video' }));
		const AudioSearchResultComponent = mount(cloneElement(searchResult, { type: 'audio' }));

		const videoIconElement = VideoSearchResultComponent.find('.o-svg-icon--eye');
		const audioIconElement = AudioSearchResultComponent.find('.o-svg-icon--headphone');

		expect(videoIconElement).toHaveLength(1);
		expect(audioIconElement).toHaveLength(1);
	});

	it('Should render date param correctly', () => {
		const SearchResultComponent = mount(searchResult);

		const dateMetaDataElement = SearchResultComponent.find('.c-meta-data__item').at(0);

		expect(dateMetaDataElement.html()).toContain(fakeSearchResult.dcterms_issued);
	});

	it('Should render viewCount param correctly', () => {
		const SearchResultComponent = mount(searchResult);

		const viewCountElement = SearchResultComponent.find('.c-meta-data__item').at(1);

		expect(viewCountElement.html()).toContain(41);
	});

	it('Should render bookmarkCount param correctly', () => {
		const SearchResultComponent = mount(searchResult);

		const bookmarkCountElement = SearchResultComponent.find('.c-meta-data__item').at(2);

		expect(bookmarkCountElement.html()).toContain(12);
	});

	it('Should render description param correctly', () => {
		const SearchResultComponent = mount(searchResult);

		const descriptionElement = SearchResultComponent.find('.c-search-result__description');

		expect(descriptionElement.html()).toContain(fakeSearchResult.dcterms_abstract.substring(0, 20));
	});

	it('Should render duration param correctly', () => {
		const SearchResultComponent = mount(searchResult);

		const durationElement = SearchResultComponent.find('.c-thumbnail-media__meta').first();
		expect(durationElement.html()).toContain(fakeSearchResult.fragment_duration_time);
	});

	it('Should render numberOfItems param correctly', () => {
		const SearchResultComponent = mount(
			<SearchResult
				type={'collection'}
				date={fakeSearchResult.dcterms_issued}
				viewCount={41}
				bookmarkCount={12}
				description={fakeSearchResult.dcterms_abstract}
				tags={['Redactiekeuze', 'Partner']}
			>
				<SearchResultTitle>
					<a className="title-link" href={`detail/${fakeSearchResult.pid}`}>
						{fakeSearchResult.dc_title}
					</a>
				</SearchResultTitle>
				<SearchResultSubtitle>
					<a
						className="subtitle-link"
						href={`search?filters={'provider':['${fakeSearchResult.original_cp}']}`}
					>
						{fakeSearchResult.original_cp}
					</a>
				</SearchResultSubtitle>
				<SearchResultThumbnail>
					<a className="thumbnail-link" href={`detail/${fakeSearchResult.pid}`}>
						<Thumbnail
							category={fakeSearchResult.administrative_type as any}
							src={fakeSearchResult.thumbnail_path}
							label={fakeSearchResult.administrative_type}
							meta={'25 items'}
						/>
					</a>
				</SearchResultThumbnail>
			</SearchResult>
		);

		const numberOfItemsElement = SearchResultComponent.find('.c-thumbnail-media__meta').first();

		expect(numberOfItemsElement.html()).toContain(`25 items`);
	});

	it('Should render tags param correctly', () => {
		const SearchResultComponent = mount(searchResult);

		const firstTagElement = SearchResultComponent.find('.c-tag').at(0);
		const secondTagElement = SearchResultComponent.find('.c-tag').at(1);

		expect(firstTagElement.html()).toContain('Redactiekeuze');
		expect(secondTagElement.html()).toContain('Partner');
	});
});
