# 5.60.0 (2024-04-12)


### Bug Fixes

* **Affix:** fix misalignment due to DOM content updates ([#3124](https://github.com/rsuite/rsuite/issues/3124)) ([76d21e9](https://github.com/rsuite/rsuite/commit/76d21e9e950da8c2df52d1fbc96abcada633d908))
* **Affix:** fix unupdated position after window size change ([#2256](https://github.com/rsuite/rsuite/issues/2256)) ([61c7b27](https://github.com/rsuite/rsuite/commit/61c7b279f136ae44b9470046344cd6e163d02589))
* **Breadcrumb:** avoid separator key conflict with item key ([#2186](https://github.com/rsuite/rsuite/issues/2186)) ([428529a](https://github.com/rsuite/rsuite/commit/428529afb4f1c746ccebe06db3dd10438be8aa31))
* **Button:** Add button radius variable ([#2106](https://github.com/rsuite/rsuite/issues/2106)) ([63a61c4](https://github.com/rsuite/rsuite/commit/63a61c4eede3b22c91eef126b72fc1afb280a18e))
* **Button:** apply size from parent ButtonGroup ([#2194](https://github.com/rsuite/rsuite/issues/2194)) ([85e9a21](https://github.com/rsuite/rsuite/commit/85e9a21d5cbc5c4fd4e92d591a8fe0cce5f43a15))
* **calendar:** fix the date on the calendar as controlled and remove timezone ([#1781](https://github.com/rsuite/rsuite/issues/1781)) ([70e323d](https://github.com/rsuite/rsuite/commit/70e323dfb059ebd8fd985fafe13e75e8ff7ccdb6))
* **Carousel:** add a flex-wrap property on toolbar buttons ([#2302](https://github.com/rsuite/rsuite/issues/2302)) ([a9a9113](https://github.com/rsuite/rsuite/commit/a9a911378c4aaeba43233dd3acdc05913a9bf6ae))
* **Carousel:** make onSelect prop optional ([#2170](https://github.com/rsuite/rsuite/issues/2170)) ([c4d7a63](https://github.com/rsuite/rsuite/commit/c4d7a63f4ec71ebb05d92b04bd26ebe547609dd0))
* **cascader:** adjust the rendering status of async loaded child nodes ([#1764](https://github.com/rsuite/rsuite/issues/1764)) ([ae41a18](https://github.com/rsuite/rsuite/commit/ae41a1842553bb82ff07d986f248e27c241259e0))
* **cascader:** fix data not controlled on MultiCascader ([#1747](https://github.com/rsuite/rsuite/issues/1747)) ([593adc5](https://github.com/rsuite/rsuite/commit/593adc5600624986ac9b13ee72c63e440eed2e1e))
* **cascader:** fix search result row height ([#1717](https://github.com/rsuite/rsuite/issues/1717)) ([94696eb](https://github.com/rsuite/rsuite/commit/94696eb59a870cbfe259c40694edbb0c88a30de3))
* **check-picker:** fix `onClean` should not be triggered on Input ([#1947](https://github.com/rsuite/rsuite/issues/1947)) ([5cb1685](https://github.com/rsuite/rsuite/commit/5cb16858fbbcf5f51f14cec2712caaab6e9e5e17))
* **check-picker:** fix unable to clear value when pressing `Backspace` ([#1812](https://github.com/rsuite/rsuite/issues/1812)) ([1534174](https://github.com/rsuite/rsuite/commit/1534174ccfc7259d24cdd0f31b3c2763d0a26f74))
* **check-tree-picker:** onChange does't return the correct value ([#1743](https://github.com/rsuite/rsuite/issues/1743)) ([b34a919](https://github.com/rsuite/rsuite/commit/b34a919fd56b781a479aedfadbc27a1392719ccd))
* **CheckTree:** root node indeterminate state error ([#2124](https://github.com/rsuite/rsuite/issues/2124)) ([9dac0bc](https://github.com/rsuite/rsuite/commit/9dac0bc0e51b58b46aa85dac8a0348a9d73b2503))
* **CheckTreePicker:** fix CheckTreePicker label style ([#2304](https://github.com/rsuite/rsuite/issues/2304)) ([07eb5ac](https://github.com/rsuite/rsuite/commit/07eb5acd4e8283529619ad2b4d6003b0c4f8614d))
* **CheckTreePicker:** fix root node style incorrect ([#2279](https://github.com/rsuite/rsuite/issues/2279)) ([c09226e](https://github.com/rsuite/rsuite/commit/c09226e141f7881b11fe5594d802974f49e789a9))
* **col:** fix the missing className prefix in Col ([#1967](https://github.com/rsuite/rsuite/issues/1967)) ([fc0e0af](https://github.com/rsuite/rsuite/commit/fc0e0af79ad397772ad9a7bcfe6a7daf9c4261be))
* **date-picker:** correct the style of non-current month dates ([#1732](https://github.com/rsuite/rsuite/issues/1732)) ([90058f8](https://github.com/rsuite/rsuite/commit/90058f8f260708749b0f8ba0c9a8cee1088ba15c))
* **date-picker:** fix AM/PM display incorrect issue when switching hours ([#1823](https://github.com/rsuite/rsuite/issues/1823)) ([110715e](https://github.com/rsuite/rsuite/commit/110715eab8e2ad5765da5eb326b4fb3ad990f4d7))
* **date-picker:** fix calendar header wrapping ([#1907](https://github.com/rsuite/rsuite/issues/1907)) ([4cfc3af](https://github.com/rsuite/rsuite/commit/4cfc3afc6a004cdacfed2fb9da101617a253c2de))
* **date-picker:** fix DatePicker cannot be used as controlled ([#1844](https://github.com/rsuite/rsuite/issues/1844)) ([3d6c035](https://github.com/rsuite/rsuite/commit/3d6c035b08e20fe9b2d5ba6fd1dba55fb3940a98)), closes [#1842](https://github.com/rsuite/rsuite/issues/1842)
* **date-range-picker:** fix date formatting error when typing ([#1991](https://github.com/rsuite/rsuite/issues/1991)) ([f65f7f8](https://github.com/rsuite/rsuite/commit/f65f7f83b539eb368bdb961052f79a91dd34dbd1))
* **datepicker:** fix gap between date cells ([#1726](https://github.com/rsuite/rsuite/issues/1726)) ([03a7604](https://github.com/rsuite/rsuite/commit/03a76042e025729f12e932d4e6cd4470644f3b12))
* **DatePicker:** fix clear button not working ([#2273](https://github.com/rsuite/rsuite/issues/2273)) ([649362a](https://github.com/rsuite/rsuite/commit/649362aa697a292af28c5ec666e4337a7bd449c7))
* **DatePicker:** fix DatePicker does not change value after pressing enter ([#2055](https://github.com/rsuite/rsuite/issues/2055)) ([c775444](https://github.com/rsuite/rsuite/commit/c7754445763f2553a3cc50e195b1dc347f774415))
* **DatePicker,DateRangePicker:** suppress depreated caretComponent warning ([#2233](https://github.com/rsuite/rsuite/issues/2233)) ([3a79d48](https://github.com/rsuite/rsuite/commit/3a79d486268ff31ad6a620dfc17165c3be259219))
* **DateRangePicker:** fix DateRangePicker cannot switch am/pm ([#2171](https://github.com/rsuite/rsuite/issues/2171)) ([4c55db9](https://github.com/rsuite/rsuite/commit/4c55db9a3a96927589d4366ece1f329c011ccb0f))
* **DateRangePicker:** fix DateRangePicker does not change value after pressing enter ([#2056](https://github.com/rsuite/rsuite/issues/2056)) ([8e5db2e](https://github.com/rsuite/rsuite/commit/8e5db2e54d8e6ad79f7219dc69cd1f52f32a8295))
* **DateRangePicker:** fix selecting ending date not working ([#2217](https://github.com/rsuite/rsuite/issues/2217)) ([2136aa3](https://github.com/rsuite/rsuite/commit/2136aa3327f914a910fb5805b2d11a036e0f6601))
* **DateRangePicker:** support time selection ([#1882](https://github.com/rsuite/rsuite/issues/1882)) ([59779ef](https://github.com/rsuite/rsuite/commit/59779ef2f53999c5439e51f232bd981e50a63211))
* **drawer:** fix incorrect styles in drawer title and drawer actions ([#1874](https://github.com/rsuite/rsuite/issues/1874)) ([747a5f1](https://github.com/rsuite/rsuite/commit/747a5f1abb348cc4d31bb5883e89dcc1ec31e949))
* **Drawer:** fix Drawer cannot be closed when backdrop is clicked ([#2259](https://github.com/rsuite/rsuite/issues/2259)) ([a49ee03](https://github.com/rsuite/rsuite/commit/a49ee03db33c11db30597221ca61ce6daa088c4b))
* **Dropdown:** dropdown item panel not rendering content ([#2128](https://github.com/rsuite/rsuite/issues/2128)) ([6631500](https://github.com/rsuite/rsuite/commit/6631500c74b0305026931a6379980fda9b587c6e))
* **Dropdown:** infer toggleAs component props ([#2299](https://github.com/rsuite/rsuite/issues/2299)) ([84611cc](https://github.com/rsuite/rsuite/commit/84611cc6f88e1d9cd712bc3f08be559d0a146ba0))
* **Dropdown:** reduce padding in noCaret variant ([#2236](https://github.com/rsuite/rsuite/issues/2236)) ([682f883](https://github.com/rsuite/rsuite/commit/682f8830601d784452c10729a369ebe91057eddb))
* **Dropdown:** wrong submenu placement in RTL direction ([#2280](https://github.com/rsuite/rsuite/issues/2280)) ([c3735c3](https://github.com/rsuite/rsuite/commit/c3735c335d5a8ca6e9954af1e5b77c453b5bd4d2))
* **dropdown-item:** close <Dropdown> inside <Navbar> on click its item ([#1791](https://github.com/rsuite/rsuite/issues/1791)) ([cc01a34](https://github.com/rsuite/rsuite/commit/cc01a340bf2c86437d340d0c6bfea2a6e7b5be48))
* **dropdown-menu:** remove unrecognizable activeKey from dom ([#1827](https://github.com/rsuite/rsuite/issues/1827)) ([d578b5b](https://github.com/rsuite/rsuite/commit/d578b5bcf101716113daea458749bc4350b1caec))
* **Dropdown.Item:** item inside Nav not pass "as" ([#2026](https://github.com/rsuite/rsuite/issues/2026)) ([34bfffd](https://github.com/rsuite/rsuite/commit/34bfffdbcd353753912b30b38523e3b62f430e98)), closes [#2025](https://github.com/rsuite/rsuite/issues/2025)
* **Dropdown.Item:** render custom element inside li ([#2044](https://github.com/rsuite/rsuite/issues/2044)) ([a2e8a00](https://github.com/rsuite/rsuite/commit/a2e8a00c94f77028ed489a65f970264eeb9551ea))
* **dts:** fix declaration errors in typescript strict mode ([#2130](https://github.com/rsuite/rsuite/issues/2130)) ([c31f080](https://github.com/rsuite/rsuite/commit/c31f080ea290d8420df77b406c29b89be44bef01))
* **dts:** remove redundant generics on SyntheticEvent ([#2099](https://github.com/rsuite/rsuite/issues/2099)) ([30ccd68](https://github.com/rsuite/rsuite/commit/30ccd685fb09092fb1fa693929cdba5d26967f96))
* **fa_IR:** trim long text of days to shorter ones ([#2076](https://github.com/rsuite/rsuite/issues/2076)) ([a893b82](https://github.com/rsuite/rsuite/commit/a893b82b835f9268a0053ede64565c96e6110095))
* **FormControl:** infer additional props from accepter ([#2084](https://github.com/rsuite/rsuite/issues/2084)) ([5d39fed](https://github.com/rsuite/rsuite/commit/5d39fed6e56418e85367df9dd5aeb7b49774380b))
* **IconButton:** primary icon button with text wrong bg ([#2141](https://github.com/rsuite/rsuite/issues/2141)) ([fde0cd4](https://github.com/rsuite/rsuite/commit/fde0cd4bce84c8f5d054d1722e9dfa61de49a7fa))
* **Input:** correct value argument type for onChange callback ([#2087](https://github.com/rsuite/rsuite/issues/2087)) ([7a4ff02](https://github.com/rsuite/rsuite/commit/7a4ff02e1e01b40f2e2bffea105181500848d2c9))
* **input-picker:** fix extra height in disabled state ([#1718](https://github.com/rsuite/rsuite/issues/1718)) ([dd56301](https://github.com/rsuite/rsuite/commit/dd56301ad35cb014617bceff11c85474014aebb8))
* **InputNumber:** inherit html input attributes ([#2298](https://github.com/rsuite/rsuite/issues/2298)) ([d7622ee](https://github.com/rsuite/rsuite/commit/d7622eed72b36ed15e91f606027d2e540391bdc7))
* **less:** palette function accepts rgb color ([#2107](https://github.com/rsuite/rsuite/issues/2107)) ([92c2dc5](https://github.com/rsuite/rsuite/commit/92c2dc5cf9273a26de189cee6e79b57740e17b49))
* **list-item:** fix unable to set HTML event on List.Item ([#1863](https://github.com/rsuite/rsuite/issues/1863)) ([07578a2](https://github.com/rsuite/rsuite/commit/07578a2c2daf2da2a081747e87b3b50a1b5c7b0d)), closes [#1859](https://github.com/rsuite/rsuite/issues/1859)
* **locales:** fix the undefined problem of Locale ([#1834](https://github.com/rsuite/rsuite/issues/1834)) ([bf35a23](https://github.com/rsuite/rsuite/commit/bf35a232c3058528d1c10510d0114a1f364d8781))
* **message:** improve close icon style ([#1807](https://github.com/rsuite/rsuite/issues/1807)) ([4d1bf3f](https://github.com/rsuite/rsuite/commit/4d1bf3f31e2d2c8e71cca4e922c3df187c4bc320))
* **modal:** remove extra margins in full-size modal ([#1699](https://github.com/rsuite/rsuite/issues/1699)) ([d231cc6](https://github.com/rsuite/rsuite/commit/d231cc6ea63043492c0cf236f577dde36f64a0bb))
* **Modal:** fix Modal focus being reset on re-rendering ([#2208](https://github.com/rsuite/rsuite/issues/2208)) ([a931b06](https://github.com/rsuite/rsuite/commit/a931b06942e7fc011ab77e70b105f5790a33e55b))
* **Modal:** fix Modal not focused when opened ([#2180](https://github.com/rsuite/rsuite/issues/2180)) ([383ea12](https://github.com/rsuite/rsuite/commit/383ea129b315590700301ef823e7a24309e8237b))
* **Modal:** improve the mouse scrolling experience on Modal ([#2254](https://github.com/rsuite/rsuite/issues/2254)) ([137d57e](https://github.com/rsuite/rsuite/commit/137d57ef1e79ca0055b3af8d6cd5cff2a9c4ef55))
* **MultiCascader:** fix not rendering the count of selected values ([#2289](https://github.com/rsuite/rsuite/issues/2289)) ([324e90c](https://github.com/rsuite/rsuite/commit/324e90c8499adf58cb25083fd5c99fe98eb9ecba))
* **nav:** trigger `onSelect` on `<Nav>` when clicking `<Nav.Item>` ([#1797](https://github.com/rsuite/rsuite/issues/1797)) ([3fc99c4](https://github.com/rsuite/rsuite/commit/3fc99c4ffee541ae5d482c02e8b4bf498f6151d0))
* **Nav:** fix incorrect Dropdown button background ([#2227](https://github.com/rsuite/rsuite/issues/2227)) ([421de83](https://github.com/rsuite/rsuite/commit/421de838ed13694254cc6a178d0369e12b666202))
* **navbar:** fix navbar dropdown hover text color ([#1719](https://github.com/rsuite/rsuite/issues/1719)) ([44230fd](https://github.com/rsuite/rsuite/commit/44230fd28f694461b102c8f78e0ffcfd9db31edd))
* **Navbar:** fix dropdown submenu throwing error ([#2250](https://github.com/rsuite/rsuite/issues/2250)) ([875130d](https://github.com/rsuite/rsuite/commit/875130d342f58e4078babe428913640e0b2faa04))
* **Navbar:** fix icon style in Navbar items ([#2229](https://github.com/rsuite/rsuite/issues/2229)) ([560df61](https://github.com/rsuite/rsuite/commit/560df61a44c0338b153b2c09a50e946c207c684a))
* **Navbar:** fix item hover style ([#2010](https://github.com/rsuite/rsuite/issues/2010)) ([8e6e13f](https://github.com/rsuite/rsuite/commit/8e6e13f3eafc1b0cd89900943e351fac817b8598))
* **Navbar:** fix Whisper on Nav.Item within Navbar wrong positioning ([#2274](https://github.com/rsuite/rsuite/issues/2274)) ([bd0f5e3](https://github.com/rsuite/rsuite/commit/bd0f5e316e6bb910d9a41e43770b4d1a61528d9f)), closes [#2263](https://github.com/rsuite/rsuite/issues/2263)
* **navbar,dropdown:** unexpected focus submenu ([#1908](https://github.com/rsuite/rsuite/issues/1908)) ([697aa3e](https://github.com/rsuite/rsuite/commit/697aa3e4cb3dbda785285ce9a657e6e05f4ccb13))
* **navigation:** improve accessibility of nav components ([#1792](https://github.com/rsuite/rsuite/issues/1792)) ([45468bd](https://github.com/rsuite/rsuite/commit/45468bdb082bab73f7ac3388209361d5963e436c))
* **Overlay:** fix position offset inside container ([#2049](https://github.com/rsuite/rsuite/issues/2049)) ([c27b19e](https://github.com/rsuite/rsuite/commit/c27b19e9c9ec0191ccf5d36d9efe6b176b0b6d84))
* **Overlay:** overlay is rendered inside Modal by default ([#2230](https://github.com/rsuite/rsuite/issues/2230)) ([4fac628](https://github.com/rsuite/rsuite/commit/4fac628e23e41db097ec63c2ac348a7345f3ee31))
* **pagination:** export type definition of `PaginationProps` ([#1817](https://github.com/rsuite/rsuite/issues/1817)) ([80c7d9e](https://github.com/rsuite/rsuite/commit/80c7d9ed9e2e54e6e07bdf320e67408a7ca738ca))
* **PanelGroup:** missing border for nested panels ([#2142](https://github.com/rsuite/rsuite/issues/2142)) ([225821f](https://github.com/rsuite/rsuite/commit/225821f2cdeba8637d70f4626f02ae1acd93eb24))
* **picker:** [TS] fix the missing definition of `size` in Pickers ([#1926](https://github.com/rsuite/rsuite/issues/1926)) ([6497698](https://github.com/rsuite/rsuite/commit/64976989a8b5ed3a4e476476f35d39692f05a0d6))
* **picker:** picker should not focus when it is disabled ([#1782](https://github.com/rsuite/rsuite/issues/1782)) ([6640c58](https://github.com/rsuite/rsuite/commit/6640c58879d253bcab3e9728d9bbc638c8400946))
* **picker:** update the position after the overlay size is changed ([#1780](https://github.com/rsuite/rsuite/issues/1780)) ([6366c36](https://github.com/rsuite/rsuite/commit/6366c36b5bf6db75745dc0ed30c0306a890801bc))
* **Picker:** add ref to PickerComponentProps ([#2261](https://github.com/rsuite/rsuite/issues/2261)) ([6e3e6c5](https://github.com/rsuite/rsuite/commit/6e3e6c57932af142dc1a74da6b7fffb57ae628ca))
* **pickers:** add missing default appearance ([#2004](https://github.com/rsuite/rsuite/issues/2004)) ([e0bbc45](https://github.com/rsuite/rsuite/commit/e0bbc45cfe5a1cc9978dd8e1d988294764ec321a))
* **pickers:** clean button overlapping with value ([#1984](https://github.com/rsuite/rsuite/issues/1984)) ([ec127dc](https://github.com/rsuite/rsuite/commit/ec127dcd3b759ed3ffc7c22603023017734cc782))
* **pickers:** fix `listProps` not working on picker ([#1962](https://github.com/rsuite/rsuite/issues/1962)) ([956ef12](https://github.com/rsuite/rsuite/commit/956ef120bfc679f7aafc28654f18d589cc28d848))
* **pickers:** fix custom input in Picker cannot be focused ([#2176](https://github.com/rsuite/rsuite/issues/2176)) ([8a94bd6](https://github.com/rsuite/rsuite/commit/8a94bd6f9640995e017716fe69b68912c55e4c86))
* **position:** fix the exception that occurs when overlay is unmount ([#1714](https://github.com/rsuite/rsuite/issues/1714)) ([9a29a5a](https://github.com/rsuite/rsuite/commit/9a29a5a8105c3c57d9d28e6f717a86481294d063))
* **radio:** fix disabled radio hover style ([#1709](https://github.com/rsuite/rsuite/issues/1709)) ([cdf0d09](https://github.com/rsuite/rsuite/commit/cdf0d098dd39207846cdad81e6036b9841acaa40))
* **Radio:** fix unclickable without children ([#2190](https://github.com/rsuite/rsuite/issues/2190)) ([cef5946](https://github.com/rsuite/rsuite/commit/cef59463e281d6aa6b4b9576204d16eed58087c8))
* **SelectPicker:** fix onChange argument type ([#2193](https://github.com/rsuite/rsuite/issues/2193)) ([db0efa9](https://github.com/rsuite/rsuite/commit/db0efa94ad33de5d02bfd81e926cf622c40ecce7))
* **sidenav:** accent dropdown icon w/ active item ([#1913](https://github.com/rsuite/rsuite/issues/1913)) ([efa389c](https://github.com/rsuite/rsuite/commit/efa389c13185823571658550cfd4e954ad6e08b1))
* **sidenav:** Dropdown not expanding inside Sidenav ([#1956](https://github.com/rsuite/rsuite/issues/1956)) ([07723cd](https://github.com/rsuite/rsuite/commit/07723cd2792b8a4ba42458cd8433541da714033c))
* **sidenav:** fix incorrect indent before dropdown toggle ([#1856](https://github.com/rsuite/rsuite/issues/1856)) ([048da73](https://github.com/rsuite/rsuite/commit/048da73e5dbc708b850574053dd0a82dbffdb20c))
* **sidenav:** fix nav item not activated in collapsed sidenav ([#1918](https://github.com/rsuite/rsuite/issues/1918)) ([59fe040](https://github.com/rsuite/rsuite/commit/59fe04009db1b75f8c3fa9f9e27fe47bf3c62cf0))
* **sidenav:** trigger <Nav onSelect> on click <Nav.Item> ([#1815](https://github.com/rsuite/rsuite/issues/1815)) ([cae171d](https://github.com/rsuite/rsuite/commit/cae171d535687b4efe83541bc12baa41249bf4e8))
* **Sidenav:** fix missing highlight on selected dropdown items ([#2216](https://github.com/rsuite/rsuite/issues/2216)) ([8f79d4a](https://github.com/rsuite/rsuite/commit/8f79d4a8aafb123f75f420a3adf3f680386aae68))
* **Sidenav:** prevent text wrapping when collapsing ([#2245](https://github.com/rsuite/rsuite/issues/2245)) ([4094233](https://github.com/rsuite/rsuite/commit/409423360a5226c8a0e11bbeecea0a4316c5c8e0))
* **Sidenav:** remove underline on hovered SidenavItem ([#2118](https://github.com/rsuite/rsuite/issues/2118)) ([56f7c3a](https://github.com/rsuite/rsuite/commit/56f7c3ad0f7ab31c7d5aef2fe2cde1661024f034))
* **Sidenav:** sidenav dropdown item accept as prop ([#2120](https://github.com/rsuite/rsuite/issues/2120)) ([5386999](https://github.com/rsuite/rsuite/commit/538699962dfd46faf41bb377833b0dcd06112039))
* **slider:** fix missing `input` in Slider and RangeSlider ([#1968](https://github.com/rsuite/rsuite/issues/1968)) ([a35bd2b](https://github.com/rsuite/rsuite/commit/a35bd2b77b9efeac0343b6df71e9a256c469a013))
* **Slider,RangeSlider:** reverse marks order in vertical orientation ([#2080](https://github.com/rsuite/rsuite/issues/2080)) ([07fdd09](https://github.com/rsuite/rsuite/commit/07fdd09bb504ea7e876e6e6b4da439a725f716a9))
* **Steps:** step item not rendering number ([#2202](https://github.com/rsuite/rsuite/issues/2202)) ([413880b](https://github.com/rsuite/rsuite/commit/413880be99972d8a58d5f0a0c9b6b08017ad33a2))
* **styles:** enable dark mode by default ([#1776](https://github.com/rsuite/rsuite/issues/1776)) ([13420e3](https://github.com/rsuite/rsuite/commit/13420e3b817bfb051b87d2ba8dc6654f7ad0caad))
* **table:** fix the typescript type definition of Table ([#1998](https://github.com/rsuite/rsuite/issues/1998)) ([8d00b8d](https://github.com/rsuite/rsuite/commit/8d00b8d10d4c5d4994521a9dd9c269c15b6c10df)), closes [#1958](https://github.com/rsuite/rsuite/issues/1958)
* **Table:** fix the column of grouping cannot be centered ([#2168](https://github.com/rsuite/rsuite/issues/2168)) ([4fbe460](https://github.com/rsuite/rsuite/commit/4fbe460da4e9744eee8589233b305b7e15295e41))
* **tag-input:** adjust default value of the trigger to `Enter` ([#1886](https://github.com/rsuite/rsuite/issues/1886)) ([4405b6b](https://github.com/rsuite/rsuite/commit/4405b6bfef2ab8a607038b8bdaf392147bd46d18))
* **tag-picker:** update TagPicker trigger props declare. ([#1996](https://github.com/rsuite/rsuite/issues/1996)) ([27da381](https://github.com/rsuite/rsuite/commit/27da381bdf2660e924469dc6f2bdb55dc19be313))
* **TagPicker:** fix tag misplacement in plaintext mode ([#2152](https://github.com/rsuite/rsuite/issues/2152)) ([6d32c71](https://github.com/rsuite/rsuite/commit/6d32c714e1b9be743d57b3ae4f1622d006e0f52c))
* **timeline:** fix incorrect spacing around axis in alternate alignment ([#1731](https://github.com/rsuite/rsuite/issues/1731)) ([b0e2f18](https://github.com/rsuite/rsuite/commit/b0e2f180816e18bd85220853ad4762a28953074c))
* **Toggle:** dismiss uncontrolled input warning ([#2243](https://github.com/rsuite/rsuite/issues/2243)) ([c4737d5](https://github.com/rsuite/rsuite/commit/c4737d5af2fabf88312c7ee2b84d4e9139e743f1))
* **Toggle:** fix Toggle is still clickable in loading state ([#2219](https://github.com/rsuite/rsuite/issues/2219)) ([e5661fd](https://github.com/rsuite/rsuite/commit/e5661fdb4ef659527ca97c2ea2231b4025e904d3))
* **Toggle:** improve a11y (keyboard focusable + keyboard events) ([#2032](https://github.com/rsuite/rsuite/issues/2032)) ([9fdfd52](https://github.com/rsuite/rsuite/commit/9fdfd52e1eab3ad3e93569112e33ad3490335fbd))
* **tree:** expose methods for tree that can scroll the list ([#2178](https://github.com/rsuite/rsuite/issues/2178)) ([0a6f9ee](https://github.com/rsuite/rsuite/commit/0a6f9ee57ed33477472f2ad41c06d5242d3d62d5))
* **Tree:** fix dragNode has cyclic object ([#2281](https://github.com/rsuite/rsuite/issues/2281)) ([26cbaf2](https://github.com/rsuite/rsuite/commit/26cbaf2fd92ab562174e19cf55388c01fe22143a)), closes [#2268](https://github.com/rsuite/rsuite/issues/2268)
* **Tree:** remove dragNode Element when drag node ([#2185](https://github.com/rsuite/rsuite/issues/2185)) ([#2237](https://github.com/rsuite/rsuite/issues/2237)) ([f6e959f](https://github.com/rsuite/rsuite/commit/f6e959f4aa24f0fa87b5fa1bbc6e1aa775fecd2b))
* **typescript:** export props of all components ([#1803](https://github.com/rsuite/rsuite/issues/1803)) ([a4edeba](https://github.com/rsuite/rsuite/commit/a4edeba0161bd9c5ee47b2c3e1dee8055b0111d9))
* **uploader:** improve thumbnail rendering on file list ([#1997](https://github.com/rsuite/rsuite/issues/1997)) ([68344d7](https://github.com/rsuite/rsuite/commit/68344d7681365fa08129b1bf0468ffddcd75ad2c))
* **Uploader:** fix disabled button opacity ([#2009](https://github.com/rsuite/rsuite/issues/2009)) ([a02aae7](https://github.com/rsuite/rsuite/commit/a02aae7395521a1246082e410811fe0e71b02a03))
* **useElementResize:** fix ResizeObserver being created repeatedly ([#2161](https://github.com/rsuite/rsuite/issues/2161)) ([32e2fa7](https://github.com/rsuite/rsuite/commit/32e2fa76a396945498f198d176b630ac09a4e20d))
* add less plugins to output lib dir, fix [#1767](https://github.com/rsuite/rsuite/issues/1767) ([#1770](https://github.com/rsuite/rsuite/issues/1770)) ([7a83699](https://github.com/rsuite/rsuite/commit/7a8369945e49670ec4773a7d47430df41ea58f8d))
* can't perform a React state update on an unmounted component ([#2105](https://github.com/rsuite/rsuite/issues/2105)) ([44439af](https://github.com/rsuite/rsuite/commit/44439afdfdf481887a78fbd86f527e29eafb1a78))
* CheckTreePicker and TreePicker search problems ([#1808](https://github.com/rsuite/rsuite/issues/1808)) ([2c5e651](https://github.com/rsuite/rsuite/commit/2c5e6510bf302dd3905d9ccd4cc0677600c49cd7)), closes [#1577](https://github.com/rsuite/rsuite/issues/1577)
* **#1146:** impove DateRangePicker panel range layout styles ([#1164](https://github.com/rsuite/rsuite/issues/1164)) ([dbb7f61](https://github.com/rsuite/rsuite/commit/dbb7f614cb21ceddd9a1a684bfe9511ed83cc982)), closes [#1146](https://github.com/rsuite/rsuite/issues/1146)
* **babel:** fix the problem that commonjs import `default` is undefined ([#1514](https://github.com/rsuite/rsuite/issues/1514)) ([9855f54](https://github.com/rsuite/rsuite/commit/9855f54d984413134ba5d877fadb80d1acfec054))
* **breadcrumb:** update locales of Breadcrumb ([30a1550](https://github.com/rsuite/rsuite/commit/30a1550ffea3b8198a4428b694ed54b520a11a2c))
* **calendar:** fix the issue of disabled date styles in Calendar ([#1424](https://github.com/rsuite/rsuite/issues/1424)) ([13b64be](https://github.com/rsuite/rsuite/commit/13b64be6326b0022b4aa8a1327c5af681b5bed8f))
* **cascader:** fix `childrenKey` property not work when searching([#1568](https://github.com/rsuite/rsuite/issues/1568)) ([#1666](https://github.com/rsuite/rsuite/issues/1666)) ([c5f3fc6](https://github.com/rsuite/rsuite/commit/c5f3fc65b5a40761c92589ee25783a32929629ee))
* **cascader:** fix icon style in Cascader ([#1426](https://github.com/rsuite/rsuite/issues/1426)) ([3076eb8](https://github.com/rsuite/rsuite/commit/3076eb815a38ccb4c20afd685fb33d5247ed5165))
* **cascader:** fixed the option not re-rendering after data update ([#1608](https://github.com/rsuite/rsuite/issues/1608)) ([6a83064](https://github.com/rsuite/rsuite/commit/6a830642735a5b5aa99e9e28d27af977c937258b)), closes [#1599](https://github.com/rsuite/rsuite/issues/1599)
* **check-picker:** fixed the group icon not showing in CheckPicker ([#1422](https://github.com/rsuite/rsuite/issues/1422)) ([082a648](https://github.com/rsuite/rsuite/commit/082a648b406fa2025fc5a0940c8b72010a559bc1))
* **checkpicker:** fix value error problem when keyboard interaction ([#1332](https://github.com/rsuite/rsuite/issues/1332)) ([ea5f91c](https://github.com/rsuite/rsuite/commit/ea5f91c1c190ab09431d0a1588fad82e25be0ce4))
* **customprovider:** integrate the locale of date-fns in CustomProvider ([#1637](https://github.com/rsuite/rsuite/issues/1637)) ([1817430](https://github.com/rsuite/rsuite/commit/1817430700870e5df4c9b17b39579dbba15569a0)), closes [#1636](https://github.com/rsuite/rsuite/issues/1636)
* **daterangepicker:** delete duplicate type definitions ([#1513](https://github.com/rsuite/rsuite/issues/1513)) ([26c9283](https://github.com/rsuite/rsuite/commit/26c9283785291a3e1b68b0d37ae61de00b3de519))
* **daterangepicker:** fix the issue of DateRangePicker closing delay ([9fc40ee](https://github.com/rsuite/rsuite/commit/9fc40eec5f51a2e6375abd6450c97334741428a8))
* **DateRangePicker:** 修复选择时间时面板收起的问题 & prettier code ([#1330](https://github.com/rsuite/rsuite/issues/1330)) ([afd0b7e](https://github.com/rsuite/rsuite/commit/afd0b7ea7e8d3663af3ed83bd2eaa6c393f55810))
* **divider:** set aria-orientation on Divider ([#1457](https://github.com/rsuite/rsuite/issues/1457)) ([fe46e4d](https://github.com/rsuite/rsuite/commit/fe46e4dd84a5a2878215d5bb760a3bd17ad6d135))
* **drawer:** remove height on Drawer body ([#1683](https://github.com/rsuite/rsuite/issues/1683)) ([759fd69](https://github.com/rsuite/rsuite/commit/759fd694677a8a0fb67480695c84f103ab97b996))
* **form-controls:** adjust the style of the plain text of form controls ([#1405](https://github.com/rsuite/rsuite/issues/1405)) ([cca782f](https://github.com/rsuite/rsuite/commit/cca782f3d54cde4624e36eb0b6155942f1835937))
* **formcontrol:** improve the accessibility of FormControl ([#1433](https://github.com/rsuite/rsuite/issues/1433)) ([c7855d4](https://github.com/rsuite/rsuite/commit/c7855d4e9796519908a1bf0b412df5f7141fc2d2))
* **icon:** adjust the dependent icons in the component ([70fdddb](https://github.com/rsuite/rsuite/commit/70fdddb853693228a20916f9b6c0fba894182517))
* **icon:** fix icon-related style issues ([b0ebaba](https://github.com/rsuite/rsuite/commit/b0ebabaf33a83a9cca1bc3a212d756004e366f71))
* **icon-button:** fix IconButton style error when disabled ([ecbf4e5](https://github.com/rsuite/rsuite/commit/ecbf4e50b044ef217863308f9ea4efa4ccbf12b9))
* **input-group:** adjust button elements in input-group ([#1406](https://github.com/rsuite/rsuite/issues/1406)) ([14acbab](https://github.com/rsuite/rsuite/commit/14acbab19d9e9f27f83103e719e3355213a52ca5))
* **input-group:** fix InputGroup size misalignment when inside ([#1474](https://github.com/rsuite/rsuite/issues/1474)) ([ca0f90f](https://github.com/rsuite/rsuite/commit/ca0f90f8dd4097ff0b7fc68da75a8ac23c19a47f))
* **input-picker:** fix InputPicker can select values in readOnly mode ([#1674](https://github.com/rsuite/rsuite/issues/1674)) ([7e5d02b](https://github.com/rsuite/rsuite/commit/7e5d02b367c06b4c161b49a0862db1680a946e5e))
* **input-picker:** fix InputPicker value not rendering when plaintext ([#1690](https://github.com/rsuite/rsuite/issues/1690)) ([fcb5995](https://github.com/rsuite/rsuite/commit/fcb5995bf5df7b0a7e79bca3e80ca4f66d75c101))
* **keyboardevent:** replace the deprecated keyCode with key ([#1691](https://github.com/rsuite/rsuite/issues/1691)) ([2f7a6d1](https://github.com/rsuite/rsuite/commit/2f7a6d1ebf9093c8af456449a731363200af82ba))
* **lgtm:** fix vulnerabilities in static code scanning using lgtm ([#1651](https://github.com/rsuite/rsuite/issues/1651)) ([77d04a7](https://github.com/rsuite/rsuite/commit/77d04a7be0aaabe32b3de971348ceaa71cc05160))
* **list:** improve List ([0eb95b0](https://github.com/rsuite/rsuite/commit/0eb95b0c18764bda3cd55ab679868f895c31be57))
* **list:** wrong position when auto scrolling ([#1687](https://github.com/rsuite/rsuite/issues/1687)) ([6b387f0](https://github.com/rsuite/rsuite/commit/6b387f0fb989a0d0196c6bd026d3ca2c3aa496e4))
* **modal:** fix ModalManager uncontrollable ([#1335](https://github.com/rsuite/rsuite/issues/1335)) ([26834da](https://github.com/rsuite/rsuite/commit/26834daf7005635ca559d6d230d686c91bb630ac))
* **radio:** fix checked radio style in disabled state ([#1708](https://github.com/rsuite/rsuite/issues/1708)) ([62a4dc7](https://github.com/rsuite/rsuite/commit/62a4dc7585c86bafaf766f08dae78b1eb86f3c2c))
* 🐛 修复非法传递到DOM节点上的问题 ([#1268](https://github.com/rsuite/rsuite/issues/1268)) ([aedaae1](https://github.com/rsuite/rsuite/commit/aedaae149c912361b873500f4570f5b720b45a06))
* 🐛 修正 Rate 笔误 ([#1230](https://github.com/rsuite/rsuite/issues/1230)) ([83d1cee](https://github.com/rsuite/rsuite/commit/83d1cee999e3b5ec2d3c72f51bdea1a2f7501b74))
* autoplay can now be interrupted in Carousel ([#1120](https://github.com/rsuite/rsuite/issues/1120)) ([0888be4](https://github.com/rsuite/rsuite/commit/0888be48c5b283046c711e06d66fbe887a5536e2))
* autoplay direction on `RTL` ([#1136](https://github.com/rsuite/rsuite/issues/1136)) ([db3ffa0](https://github.com/rsuite/rsuite/commit/db3ffa0252942415d0bf67092624d402b8265b84))
* form method cleanErrorForFiled renamed into cleanErrorForField ([#1236](https://github.com/rsuite/rsuite/issues/1236)) ([1aaaab0](https://github.com/rsuite/rsuite/commit/1aaaab0bc3f0c721838388bf4d4d5b736d91a39f))
* ISO week format on calendar panel ([666bc2b](https://github.com/rsuite/rsuite/commit/666bc2bb429903aad0ababd2bc2b39679705943e))
* MultiCascader  data cann't be controlled ([#1696](https://github.com/rsuite/rsuite/issues/1696)) ([7f9b03b](https://github.com/rsuite/rsuite/commit/7f9b03b47f0e86ce328a4acc799651e76d390feb))
* treePicker & CheckTreePicker ([ec88694](https://github.com/rsuite/rsuite/commit/ec88694c33b4d6d30df8d83919048a3cc66125c1))
* **<Steps />:** type definition error ([#436](https://github.com/rsuite/rsuite/issues/436)) ([709938a](https://github.com/rsuite/rsuite/commit/709938aa4905a4892695f76d145f028802796227))
* **Affix:** Fix [#1050](https://github.com/rsuite/rsuite/issues/1050) ([#1051](https://github.com/rsuite/rsuite/issues/1051)) ([fa44ffe](https://github.com/rsuite/rsuite/commit/fa44ffea6d8fd7dc3d5b65811acc0933779526a5))
* **AutoComplete,Loader:** fix CSS relative colors causing test errors ([#3460](https://github.com/rsuite/rsuite/issues/3460)) ([f9b1244](https://github.com/rsuite/rsuite/commit/f9b124489d6c505d10b9c8a0324b5046022aef27))
* **AvatarGroup:** fix avatar deformation in group ([#3727](https://github.com/rsuite/rsuite/issues/3727)) ([466e428](https://github.com/rsuite/rsuite/commit/466e4285d794f081f90e79fc28e8f57783c438c1))
* **build:** fix environment variable undefined error when building ([#3521](https://github.com/rsuite/rsuite/issues/3521)) ([8efa27b](https://github.com/rsuite/rsuite/commit/8efa27b69233d4cd72a4b09dbbd080b15db7d1c0))
* **Button:** fix button radius using wrong less variable ([#3451](https://github.com/rsuite/rsuite/issues/3451)) ([037a2b3](https://github.com/rsuite/rsuite/commit/037a2b3fb2696a55390018958a3d84cd0dc38958))
* **Calendar:** fix incorrect week numbers calculation ([#3471](https://github.com/rsuite/rsuite/issues/3471)) ([646e728](https://github.com/rsuite/rsuite/commit/646e72874595ee7c0a8d8596175c974ff67e146a))
* **Calendar:** fix misalignment of month selection menu layout ([#3655](https://github.com/rsuite/rsuite/issues/3655)) ([eff9702](https://github.com/rsuite/rsuite/commit/eff9702977d893caa0c701dba03b19a44d56799a))
* **Cascader:** fix bug in value selection via Enter key ([#3461](https://github.com/rsuite/rsuite/issues/3461)) ([4266e79](https://github.com/rsuite/rsuite/commit/4266e79928ce75a4e856b68003510d1d12ee4b70))
* **Checkbox:** fix Checkbox not clickable in Firefox ([#3728](https://github.com/rsuite/rsuite/issues/3728)) ([2fc23aa](https://github.com/rsuite/rsuite/commit/2fc23aa841532f4340f5bef9a7a70009b912a4b9))
* **Checkbox:** listen for click events on the correct element ([#3666](https://github.com/rsuite/rsuite/issues/3666)) ([cd43df5](https://github.com/rsuite/rsuite/commit/cd43df5feee868ad411fa4da54635b54d2d25934))
* **CheckPicker:** remove debug script ([#3615](https://github.com/rsuite/rsuite/issues/3615)) ([62285da](https://github.com/rsuite/rsuite/commit/62285da3f238dceeb2f75c168cc07bbacf0a52ce))
* **CloseButton:** fix close label translation string ([#3483](https://github.com/rsuite/rsuite/issues/3483)) ([feedbde](https://github.com/rsuite/rsuite/commit/feedbde550d96d207d6be690b89c3d12247b87d9))
* **CloseButton:** improve CloseButton accessibility ([#3488](https://github.com/rsuite/rsuite/issues/3488)) ([92ed9a5](https://github.com/rsuite/rsuite/commit/92ed9a5080e241f7e4057cbbc6e971240fb464fe))
* **CSS:** fix CSS calc syntax compatibility issue ([#3474](https://github.com/rsuite/rsuite/issues/3474)) ([88021ee](https://github.com/rsuite/rsuite/commit/88021eeaa0f7e720f6511616c0e2413570700159))
* **CSS Reset:** fix `rsuite-no-reset.css` overrides the default styles of the app ([#3527](https://github.com/rsuite/rsuite/issues/3527)) ([dff5804](https://github.com/rsuite/rsuite/commit/dff5804f81c00dfe4f4bb02eac92e070fabcc4f8))
* **CustomProvider:** fix the flicker when initializing in Dark mode ([#3528](https://github.com/rsuite/rsuite/issues/3528)) ([2bd67fd](https://github.com/rsuite/rsuite/commit/2bd67fd60ddaec9a5925d22e7cee126425b6ad78))
* **DatePicker:** fix `menuStyle` prop not working ([#3509](https://github.com/rsuite/rsuite/issues/3509)) ([aa816be](https://github.com/rsuite/rsuite/commit/aa816be89573f8483335736b67365a0b13848ecf))
* **DatePicker:** fix DatePicker can't select after typing with keyboard ([#3589](https://github.com/rsuite/rsuite/issues/3589)) ([d70d883](https://github.com/rsuite/rsuite/commit/d70d88342b44461940e768f82df04ea5549f0f4a))
* **DatePicker:** fix style error of the bottom button in the datePicker ([#3634](https://github.com/rsuite/rsuite/issues/3634)) ([536ad7e](https://github.com/rsuite/rsuite/commit/536ad7e9b0bf9c727dd69c5e0584033751422e1f))
* **DatePicker:** improve DatePicker accessibility ([#3464](https://github.com/rsuite/rsuite/issues/3464)) ([63ac804](https://github.com/rsuite/rsuite/commit/63ac8048d9ed7ab3048d9b488a5a1ce306ea2f6d))
* **DatePicker,DateRangePicker:** fix the date change when the input date is incomplete ([#3719](https://github.com/rsuite/rsuite/issues/3719)) ([24f162f](https://github.com/rsuite/rsuite/commit/24f162f6ee403dbca0829159f3a099167b278bcf))
* **DatePicker,DateRangePicker:** fix the problem of padding ([#3659](https://github.com/rsuite/rsuite/issues/3659)) ([47f84f4](https://github.com/rsuite/rsuite/commit/47f84f4a3d2e3d4bd716a40ae78cb792ac779380))
* **DateRangePicker:** fix error state when value is empty array ([#3631](https://github.com/rsuite/rsuite/issues/3631)) ([f8778f5](https://github.com/rsuite/rsuite/commit/f8778f537c441e0a49ecebf2c41c9af14a764400))
* **DateRangePicker:** fix incorrect static method type definition ([#3598](https://github.com/rsuite/rsuite/issues/3598)) ([68b3afb](https://github.com/rsuite/rsuite/commit/68b3afb712535632435ea8d2a2a6c7581ab7f8e7))
* **DateRangePicker:** fix layout misalignment due to missing min-width ([#3523](https://github.com/rsuite/rsuite/issues/3523)) ([464af79](https://github.com/rsuite/rsuite/commit/464af7964fe5fb8e434c7113084e6597726f3db6))
* **DateRangePicker:** fix time picker does not update when clicking the shortcut item ([#3647](https://github.com/rsuite/rsuite/issues/3647)) ([00c9eaa](https://github.com/rsuite/rsuite/commit/00c9eaa9b246da027c729fb3cf3639001473d4fe))
* **docs:** typo on Form name ([#3723](https://github.com/rsuite/rsuite/issues/3723)) ([8f328e1](https://github.com/rsuite/rsuite/commit/8f328e10e16cbe978aa6737baefa67ca2b4f6867))
* **Drawer:** fix the focus cannot be moved to elements outside the Drawer when `backdrop=false` ([#3716](https://github.com/rsuite/rsuite/issues/3716)) ([f044445](https://github.com/rsuite/rsuite/commit/f044445e97d653debcb1772a70c51b4a30d44f6b))
* **InlineEdit:** fix type conflict for defined `children` ([#3685](https://github.com/rsuite/rsuite/issues/3685)) ([619c455](https://github.com/rsuite/rsuite/commit/619c4551329f3e83be8f862c4cc02bb15245d0de))
* **InputGroup:** fix Input padding issue in InputGroup ([#3600](https://github.com/rsuite/rsuite/issues/3600)) ([56b3792](https://github.com/rsuite/rsuite/commit/56b379297e237aa26aff0140cd93ec3a7314e5f4))
* **InputGroup:** fix style conflict caused by zIndex set in InputGoup ([#3552](https://github.com/rsuite/rsuite/issues/3552)) ([f874edf](https://github.com/rsuite/rsuite/commit/f874edfdbf0dbc9a53e4fe26fb9cf39108f1a00c))
* **InputGroup:** fix that the bg color of `InputGroup.Addon` is inconsistent with `Input` ([#3595](https://github.com/rsuite/rsuite/issues/3595)) ([a6bb6b0](https://github.com/rsuite/rsuite/commit/a6bb6b082fea563515d53979e8ba6b9183f2af89))
* **Menu:** fix the menuitem cannot be closed correctly when it contains child elements ([#3599](https://github.com/rsuite/rsuite/issues/3599)) ([5f08313](https://github.com/rsuite/rsuite/commit/5f08313e8fded19ea0d918c95f1cb6a84101760d))
* **Message:** fix the z-index issue of Message in full screen state ([#3658](https://github.com/rsuite/rsuite/issues/3658)) ([f899b92](https://github.com/rsuite/rsuite/commit/f899b9254b694e61306ab096d324d19870bc9709))
* **Message:** make the visual style of Message more prominent ([#3603](https://github.com/rsuite/rsuite/issues/3603)) ([114013f](https://github.com/rsuite/rsuite/commit/114013ff6b7922f72e383f3b7d51a5938a1e4313))
* **Pagination:** fix SelectPicker rendering misalignment ([#3643](https://github.com/rsuite/rsuite/issues/3643)) ([044c48f](https://github.com/rsuite/rsuite/commit/044c48f3e358f93bc7568bc83242e7ea6348825e))
* **Placeholder:** fix Placeholder SSR and CSR mismatch ([#3735](https://github.com/rsuite/rsuite/issues/3735)) ([8a9c8bd](https://github.com/rsuite/rsuite/commit/8a9c8bd81003b54f930e3dfd4f99356db44f125f))
* **Sidenav:** fix secondary menu cannot expand ([#3732](https://github.com/rsuite/rsuite/issues/3732)) ([d680fa3](https://github.com/rsuite/rsuite/commit/d680fa3b7b498c72148ccff95b5ea1ad10ad7382))
* examples/with-gatsby/package.json to reduce vulnerabilities ([#3583](https://github.com/rsuite/rsuite/issues/3583)) ([2f10776](https://github.com/rsuite/rsuite/commit/2f10776c541b2616b9eef9f8e34e4758d3451f77))
* fix build errors caused by export type ([#3712](https://github.com/rsuite/rsuite/issues/3712)) ([94e9ef4](https://github.com/rsuite/rsuite/commit/94e9ef423c7722ecfa4ed3d72a320b38f13a0c6d))
* fix the problem that useToaster cannot be imported on demand and update the docs directory ([#3689](https://github.com/rsuite/rsuite/issues/3689)) ([1e4f4e3](https://github.com/rsuite/rsuite/commit/1e4f4e3ea37c20442faced375a697169a659ba56))
* fixed issue with install guide page ([#3619](https://github.com/rsuite/rsuite/issues/3619)) ([#3620](https://github.com/rsuite/rsuite/issues/3620)) ([33159b6](https://github.com/rsuite/rsuite/commit/33159b6ffeff4ce44cae03e1eb9ae806c6d2d12c))
* remove debug code ([#3720](https://github.com/rsuite/rsuite/issues/3720)) ([637b8dc](https://github.com/rsuite/rsuite/commit/637b8dc6bb19a6775eda692534282a0dce1ebfbc))
* **Loader:** set correct ARIA properties for Loader ([#3691](https://github.com/rsuite/rsuite/issues/3691)) ([92505e2](https://github.com/rsuite/rsuite/commit/92505e258303e9be52d8771e2eedcd147e79406c))
* **nav:** default appearance doesn't show an active background when focused ([#3654](https://github.com/rsuite/rsuite/issues/3654)) ([3dcf943](https://github.com/rsuite/rsuite/commit/3dcf943a8e6811f4369ed858fba671e7783ef6f7))
* **Panel:** fix uncontrolled re-rendering of Panel children ([#3610](https://github.com/rsuite/rsuite/issues/3610)) ([8f9a8a8](https://github.com/rsuite/rsuite/commit/8f9a8a831156ac1eeee50b8093bce9ed89cf043d))
* **pickers:** fix the spacing of the searchbox is not uniform in all pickers ([#3565](https://github.com/rsuite/rsuite/issues/3565)) ([4c90a03](https://github.com/rsuite/rsuite/commit/4c90a03e79f34af0ec12730362c844e1ad0bd89d))
* **Slider,RangeSlider:** fix touch event not working ([#3653](https://github.com/rsuite/rsuite/issues/3653)) ([3d57ebc](https://github.com/rsuite/rsuite/commit/3d57ebcaebafa3207b84987ba7e80cd4c38a2741))
* **TagGroup:** fix css entry in nested children ([#3663](https://github.com/rsuite/rsuite/issues/3663)) ([fc59018](https://github.com/rsuite/rsuite/commit/fc590180066e26cbfba28428b4db54f6f4a070dc))
* **TagPicker:** fix TagPicker size issue ([#3702](https://github.com/rsuite/rsuite/issues/3702)) ([3319e12](https://github.com/rsuite/rsuite/commit/3319e127f00ea84150c2a08f6eb0a7a042ce32f1))
* **TagPicker:** fix the margin issue between tags in plaintext mode ([#3638](https://github.com/rsuite/rsuite/issues/3638)) ([61f343b](https://github.com/rsuite/rsuite/commit/61f343b43677b9d1441f5c5a60cc7a95ae6890ca))
* **tree:** improve the hover and focus status of Tree nodes ([#3594](https://github.com/rsuite/rsuite/issues/3594)) ([559b837](https://github.com/rsuite/rsuite/commit/559b83731e3e46b09efe6cfcf6bb4d78e8cc0038))
* **Tree,CheckTree:** fix `classPrefix` and `className` not working correctly ([#3616](https://github.com/rsuite/rsuite/issues/3616)) ([c82cb91](https://github.com/rsuite/rsuite/commit/c82cb919a12be2bd94e7bf1018e3f3c8aa522c1f))
* formControll will pass undefined as value when value is null defaultValue is undefined ([#3456](https://github.com/rsuite/rsuite/issues/3456)) ([cde5a88](https://github.com/rsuite/rsuite/commit/cde5a889036f1873115b8be2ac31a31b8ff28bd3))
* improve accessibility of picker related components ([#3463](https://github.com/rsuite/rsuite/issues/3463)) ([1cc5481](https://github.com/rsuite/rsuite/commit/1cc54812957b096273e0fa503b365da3c5eeba11))
* NavItem and DropDownItem rendering icon without overriding className ([#3561](https://github.com/rsuite/rsuite/issues/3561)) ([6a8e81f](https://github.com/rsuite/rsuite/commit/6a8e81fb2aa38433e88a5d11835357808bb772d8))
* supports Fragment children component ([#3607](https://github.com/rsuite/rsuite/issues/3607)) ([299b951](https://github.com/rsuite/rsuite/commit/299b951644ce6564bd53f6d0a4d031180d9e4e9d))
* **useUniqueId:** use toString instead of an empty string ([#3591](https://github.com/rsuite/rsuite/issues/3591)) ([d80914c](https://github.com/rsuite/rsuite/commit/d80914c5635d2b9b41d09258266249e52a6b7a90))
* typo in Next.js guide ([#3555](https://github.com/rsuite/rsuite/issues/3555)) ([77d60cf](https://github.com/rsuite/rsuite/commit/77d60cfeb27e3e52b4003d72114e5164b275a3d2))
* **AutoComplete:** add missing autoComplete prop ([#3108](https://github.com/rsuite/rsuite/issues/3108)) ([c855fab](https://github.com/rsuite/rsuite/commit/c855fab4488c6545ad567166007a6f6650db2849))
* **AutoComplete:** fix AutoComplete plaintext mode not working ([#3436](https://github.com/rsuite/rsuite/issues/3436)) ([72b79e7](https://github.com/rsuite/rsuite/commit/72b79e7b6dfb90ec23bb81b1145db125f8b827cd))
* **AutoComplete:** fix readOnly not work ([#3107](https://github.com/rsuite/rsuite/issues/3107)) ([493bbdc](https://github.com/rsuite/rsuite/commit/493bbdcd4fcfbe271bc98108f3831f18ffda9353))
* **build:** fix broken lodash currying in CDN bundles ([#3159](https://github.com/rsuite/rsuite/issues/3159)) ([896a9d5](https://github.com/rsuite/rsuite/commit/896a9d53cf2c1e0140e43eea024c4f0361c04328))
* **Button:** fix Button content not center-aligned ([#3087](https://github.com/rsuite/rsuite/issues/3087)) ([28ff13b](https://github.com/rsuite/rsuite/commit/28ff13b2c2ab8f08ccaa854caffa0a5674d1aabc))
* **Calendar:** fix onMonthChange not fired when clicking on dates ([#3335](https://github.com/rsuite/rsuite/issues/3335)) ([035d287](https://github.com/rsuite/rsuite/commit/035d287c0f998e1f1aeed62dca7d2cfeded46167))
* **Calendar:** fix style errors that are not as designed ([#3146](https://github.com/rsuite/rsuite/issues/3146)) ([f3fe484](https://github.com/rsuite/rsuite/commit/f3fe484a8f63e877c517061e5911116d3107b68b))
* **Carousel:** fix index not being reset when children change ([#3185](https://github.com/rsuite/rsuite/issues/3185)) ([3afb746](https://github.com/rsuite/rsuite/commit/3afb7460f5d12b34eb0e7944fa9f5a461b663028))
* **Cascader:** avoid mutating data prop ([#3157](https://github.com/rsuite/rsuite/issues/3157)) ([6d13318](https://github.com/rsuite/rsuite/commit/6d133185ea1c65b47b35da61499d5cff77dde122))
* **Cascader:** fix infinite load state on inline mode and fix typo ([#3131](https://github.com/rsuite/rsuite/issues/3131)) ([faa05f0](https://github.com/rsuite/rsuite/commit/faa05f03df1ab890f0bcf13ebd173e52129400df))
* **CheckPicker:** avoid mutating data when groupBy is specified ([#3173](https://github.com/rsuite/rsuite/issues/3173)) ([1a9805a](https://github.com/rsuite/rsuite/commit/1a9805a00cffcb8e527fbeb1df3a346da9a707f0))
* **CheckPicker:** wrong padding of grouped options ([#3306](https://github.com/rsuite/rsuite/issues/3306)) ([03ca6bf](https://github.com/rsuite/rsuite/commit/03ca6bff626146d44b1dd9ca1f931a984ad3103a))
* **CheckTree:** searchKeyword is not updated as expected ([#3354](https://github.com/rsuite/rsuite/issues/3354)) ([8b7fbb7](https://github.com/rsuite/rsuite/commit/8b7fbb7bc53e32069cae1184514c4a149919cc89)), closes [#3196](https://github.com/rsuite/rsuite/issues/3196)
* **DatePicker:** added stack styles to datepicker styles ([#3195](https://github.com/rsuite/rsuite/issues/3195)) ([b3ed580](https://github.com/rsuite/rsuite/commit/b3ed580867db2e5205e71475c593e7d17ff04b49))
* **DatePicker:** fix abnormal time display in the calendar header ([#3136](https://github.com/rsuite/rsuite/issues/3136)) ([860df1a](https://github.com/rsuite/rsuite/commit/860df1a7bd03b40371ac6891e45f3295b9edc72f))
* **DatePicker:** fix defaultValue not changing month on calendar ([#3183](https://github.com/rsuite/rsuite/issues/3183)) ([b0a2b5f](https://github.com/rsuite/rsuite/commit/b0a2b5f5cfe6ea94c1c13f8e9451c5d60f7f5b80))
* **DatePicker,DateRangePicker:** fix calendar styles per design ([#3325](https://github.com/rsuite/rsuite/issues/3325)) ([a7d1c08](https://github.com/rsuite/rsuite/commit/a7d1c08c44c6169bcd10b32dcb4bb9ebcbb93677))
* **DatePicker,DateRangePicker:** fix inability to clear values via Backspace key ([#3446](https://github.com/rsuite/rsuite/issues/3446)) ([ca7dcdd](https://github.com/rsuite/rsuite/commit/ca7dcddb1406b8d6a20ff4ad11755fbac83be07e))
* **DateRangePicker:** fix lifecycle for Picker Toggle ([#3074](https://github.com/rsuite/rsuite/issues/3074)) ([f46717b](https://github.com/rsuite/rsuite/commit/f46717b4b464513d64b226faba9a6d8bacc52678))
* **DateRangePicker:** fix the error of invalid time during date selection ([#3135](https://github.com/rsuite/rsuite/issues/3135)) ([adeafdc](https://github.com/rsuite/rsuite/commit/adeafdc44162fd2ef9e2470094a52cb17b5cddb3))
* **docs:** wrong menuToggle style in RTL direction ([#3223](https://github.com/rsuite/rsuite/issues/3223)) ([38313a9](https://github.com/rsuite/rsuite/commit/38313a9438984c9da8ef4f7f1c10678500fc11db))
* **Drawer:** change Drawer title font-size to 18px ([#3430](https://github.com/rsuite/rsuite/issues/3430)) ([3eff439](https://github.com/rsuite/rsuite/commit/3eff439a0fa28e5349e306b6b2ded8eb9e847f95))
* **form:** form doesn't pass correct formValue to context ([#3426](https://github.com/rsuite/rsuite/issues/3426)) ([0ade0dc](https://github.com/rsuite/rsuite/commit/0ade0dc60e25857120eb38047cec1c7e78f8df11))
* **Form.Control:** fix not able to override checked prop ([#3120](https://github.com/rsuite/rsuite/issues/3120)) ([aac965e](https://github.com/rsuite/rsuite/commit/aac965e1fdc80bf67885c609021fa8e01b2f3576))
* **i18n:** update ru_RU locale ([#3153](https://github.com/rsuite/rsuite/issues/3153)) ([5c626a9](https://github.com/rsuite/rsuite/commit/5c626a99ca70d9e30836b02f81b90a37f5f2de2d))
* **InputGroup:** fix child element's event not firing after InputGroup is disabled ([#3398](https://github.com/rsuite/rsuite/issues/3398)) ([3170408](https://github.com/rsuite/rsuite/commit/3170408f54eba3b0369e9615d471d049b06b75b4))
* **InputGroup:** fix inside addon overlapping input text ([#3324](https://github.com/rsuite/rsuite/issues/3324)) ([8f1ff30](https://github.com/rsuite/rsuite/commit/8f1ff30634dbfcd20f05b63168e767723af5a968))
* **InputPicker:** add missing top padding of listbox ([#3214](https://github.com/rsuite/rsuite/issues/3214)) ([f6df23c](https://github.com/rsuite/rsuite/commit/f6df23c085c4d7944c5817b0a9f8a1168c41f0b9))
* **InputPicker:** cursor should be text ([#3334](https://github.com/rsuite/rsuite/issues/3334)) ([eed2337](https://github.com/rsuite/rsuite/commit/eed2337546665878c51cf3d88d0801c8a37a908d))
* **InputPicker:** Fix InputPicker select bug ([#3329](https://github.com/rsuite/rsuite/issues/3329)) ([c52756b](https://github.com/rsuite/rsuite/commit/c52756b8596c20d275a9d5d2d41b7a81d355920f))
* **Modal,Drawer:** fix Modal and Drawer being automatically closed when clicked ([#3400](https://github.com/rsuite/rsuite/issues/3400)) ([b4c6222](https://github.com/rsuite/rsuite/commit/b4c622244ecd2c3f6866278e3fcd6a90707fd8a9))
* **Nav.Item:** fix vertical mis-alignment of icon ([#3344](https://github.com/rsuite/rsuite/issues/3344)) ([a1a2b70](https://github.com/rsuite/rsuite/commit/a1a2b7054b0f1431b2f2b7868f7cce04bf1ef5d2))
* **Navbar:** fix background color of the subtle navigation items incorrect ([#3392](https://github.com/rsuite/rsuite/issues/3392)) ([e49e3e7](https://github.com/rsuite/rsuite/commit/e49e3e763691e131954a5dff3c59280c85e83974))
* **Overlay:** type error on OverlayTriggerProps ([#3307](https://github.com/rsuite/rsuite/issues/3307)) ([4a2e28e](https://github.com/rsuite/rsuite/commit/4a2e28e2412a6ffebcb9ad03a99a808f4d9ee3ee))
* **OverlayTrigger:** fix handleClose will trigger twice ([#3286](https://github.com/rsuite/rsuite/issues/3286)) ([11b8eb8](https://github.com/rsuite/rsuite/commit/11b8eb8c6f43b46dcad5d1f800e6eb7a5374b0c2))
* **Picker:** change color of caret on option group title ([#3323](https://github.com/rsuite/rsuite/issues/3323)) ([0d7be85](https://github.com/rsuite/rsuite/commit/0d7be85eec97063b162877ff8169209070fb1d4a))
* **pickers:** fix keyboard events still responding when readOnly ([#3184](https://github.com/rsuite/rsuite/issues/3184)) ([56e7563](https://github.com/rsuite/rsuite/commit/56e7563b2035be767f5ed8429cd8c3622708abe8))
* **toaster:** fix useToaster not keep same reference when re-renders ([#3440](https://github.com/rsuite/rsuite/issues/3440)) ([a603033](https://github.com/rsuite/rsuite/commit/a603033eeb0a1de2299938c506fb42ee13375f2c))
* add a safety check for the deprecated findDOMNode ([#3362](https://github.com/rsuite/rsuite/issues/3362)) ([a20d77e](https://github.com/rsuite/rsuite/commit/a20d77e0a11f00eb2ca3d541d5f8150cfa3e675d))
* **OverlayTrigger:** fix Overlay should not be open when cursor is not on element ([#3401](https://github.com/rsuite/rsuite/issues/3401)) ([4a340f3](https://github.com/rsuite/rsuite/commit/4a340f357b04825a4a1300c2050613baefcddf52))
* Typo in docs ([#3368](https://github.com/rsuite/rsuite/issues/3368)) ([dee34c7](https://github.com/rsuite/rsuite/commit/dee34c7e29abbe47fa3d81ab0535a27d5a089afc))
* **Affix:** fix left offset not update after position change ([#2370](https://github.com/rsuite/rsuite/issues/2370)) ([eba3536](https://github.com/rsuite/rsuite/commit/eba353685f4892e1143b8c249ac956b2522a2993))
* **AutoComplete:** fix `listbox` not keeping the same width as `input` ([#2645](https://github.com/rsuite/rsuite/issues/2645)) ([ad09288](https://github.com/rsuite/rsuite/commit/ad09288e0fc38f964524466a79ca25532dc221f8))
* **AutoComplete:** fix animation props being passed on Input ([#2950](https://github.com/rsuite/rsuite/issues/2950)) ([4c21993](https://github.com/rsuite/rsuite/commit/4c21993531ef775e9b505d8d1d1fafce04e1b49b))
* **AutoComplete:** fix AutoComplete size property not working ([#2990](https://github.com/rsuite/rsuite/issues/2990)) ([add665b](https://github.com/rsuite/rsuite/commit/add665b82b9d2cbd21e07576bf77f74e18991e21))
* **AutoComplete:** fix missing definition of string in datatype ([#2644](https://github.com/rsuite/rsuite/issues/2644)) ([528e291](https://github.com/rsuite/rsuite/commit/528e29154d188d928e3d93853f5ed0673b932b4a))
* **Breadcrumb:** improve font color for active item ([#3028](https://github.com/rsuite/rsuite/issues/3028)) ([1efcbf9](https://github.com/rsuite/rsuite/commit/1efcbf90a345ee93928ca13c181c103d247e869d))
* **Breadcrumb:** rendered breadcrumbs as span when href is not specified ([#3027](https://github.com/rsuite/rsuite/issues/3027)) ([8ad16e4](https://github.com/rsuite/rsuite/commit/8ad16e4d572b55892a50c0cad747554039b43398))
* **Button:** fix disabled icon button bug in dark mode ([#3020](https://github.com/rsuite/rsuite/issues/3020)) ([8975eff](https://github.com/rsuite/rsuite/commit/8975eff6b6e9a4ec9c2ed4c58cfbdf4f23e5d94a))
* **Button:** remove underline when hovered ([#2516](https://github.com/rsuite/rsuite/issues/2516)) ([8bbb10d](https://github.com/rsuite/rsuite/commit/8bbb10db425dadd4110db60b8b7066d8f97bab54))
* **Button:** use [@cursor-disabled](https://github.com/cursor-disabled) intead of hardcoded cursor ([#2658](https://github.com/rsuite/rsuite/issues/2658)) ([5731762](https://github.com/rsuite/rsuite/commit/57317622eb2d65e94e0a8bb962512232cc4dfd3d))
* **buttongroup:** fixed Button componentClass not work with ButtonGroup ([#1087](https://github.com/rsuite/rsuite/issues/1087)) ([992ac31](https://github.com/rsuite/rsuite/commit/992ac31f86af7e54fc29ff6b67af6d8e535b8668)), closes [#1083](https://github.com/rsuite/rsuite/issues/1083)
* **ButtonToolbar:** change item gap to 10px ([#2475](https://github.com/rsuite/rsuite/issues/2475)) ([d97810a](https://github.com/rsuite/rsuite/commit/d97810ab4cd401b27be929569ce85bff0f498498))
* **caretAs:** fix DatePicker and DateRangePicker cannot replace caret ([#2360](https://github.com/rsuite/rsuite/issues/2360)) ([1e619b2](https://github.com/rsuite/rsuite/commit/1e619b2ef7abc58a93f6d6d4fc78ffea07761c81))
* **Cascader:** infer value and onChange types from data ([#2449](https://github.com/rsuite/rsuite/issues/2449)) ([2a8ef48](https://github.com/rsuite/rsuite/commit/2a8ef481e49dec2570868982e0dbbba808efbc03))
* **Cascader,MultiCascader:** fix sub-columns not being removed when a leaf node is selected ([#2792](https://github.com/rsuite/rsuite/issues/2792)) ([619c7de](https://github.com/rsuite/rsuite/commit/619c7debfca63a58622a1ae4a4776544bebf3405))
* **Checkbox:** correct checked state in onChange callback ([#2430](https://github.com/rsuite/rsuite/issues/2430)) ([c6819f9](https://github.com/rsuite/rsuite/commit/c6819f98fe33e197376ecd1e301eaa471c6c2178))
* **Checkbox:** set checked attribute on underlying input ([#2419](https://github.com/rsuite/rsuite/issues/2419)) ([5ded872](https://github.com/rsuite/rsuite/commit/5ded8720c70c1fe4aee3941a81c0d7ec3b0c7423))
* **CheckPicker,SelectPicker:** fix inconsistent label spacing ([#2739](https://github.com/rsuite/rsuite/issues/2739)) ([2441d7e](https://github.com/rsuite/rsuite/commit/2441d7efa20e92f11b3266ca2434a9529b31ecb4))
* **CheckTree:** fix missing type definition [#2388](https://github.com/rsuite/rsuite/issues/2388) ([#2391](https://github.com/rsuite/rsuite/issues/2391)) ([0fe4e9f](https://github.com/rsuite/rsuite/commit/0fe4e9f34d7f07354541f4d23b0278cd1d892c2e))
* **CheckTreePicker:** fix children node can't uncheck when setting virtualized ([#2782](https://github.com/rsuite/rsuite/issues/2782)) ([#2783](https://github.com/rsuite/rsuite/issues/2783)) ([50f7b89](https://github.com/rsuite/rsuite/commit/50f7b89dbe1a2b59c212e021e1bc42c50e9ebb37))
* **CheckTreePicker:** fix duplicated key when data changed ([#2486](https://github.com/rsuite/rsuite/issues/2486)) ([#2500](https://github.com/rsuite/rsuite/issues/2500)) ([d155719](https://github.com/rsuite/rsuite/commit/d155719a9ae9d9cec119a0c33281c628379b4a78))
* **CheckTreePicker:** fix uncheckable style errors ([#2695](https://github.com/rsuite/rsuite/issues/2695)) ([b47a048](https://github.com/rsuite/rsuite/commit/b47a048f358ca187079ec049340288c72c8999bd))
* **CustomProvider:** fix warnings caused by server-side rendering ([#2599](https://github.com/rsuite/rsuite/issues/2599)) ([ea05efb](https://github.com/rsuite/rsuite/commit/ea05efba3c53bf7e04ea4caa7b378a762b85af93))
* **DatePicker:** call onSelect when meridian toggled ([#2907](https://github.com/rsuite/rsuite/issues/2907)) ([9028097](https://github.com/rsuite/rsuite/commit/9028097c0049df152f83b14267c3ec30f6ae7fa9))
* **DatePicker:** fix first click not working on month selection ([#3019](https://github.com/rsuite/rsuite/issues/3019)) ([42eeaa3](https://github.com/rsuite/rsuite/commit/42eeaa3cc5e19442157f771f02dab850f257c2dc))
* **DatePicker:** fix inconsistency between month selectable state and ok button clickable state ([#2984](https://github.com/rsuite/rsuite/issues/2984)) ([70e6aba](https://github.com/rsuite/rsuite/commit/70e6aba0b7a3216c9f8b59b033826e55bebac1a1))
* **DatePicker:** fix issues with focus event ([#2636](https://github.com/rsuite/rsuite/issues/2636)) ([76b68aa](https://github.com/rsuite/rsuite/commit/76b68aa79dd129a210238517c279fe41b0da89ac))
* **DatePicker:** fix uncontrolled default date on calendar ([#3045](https://github.com/rsuite/rsuite/issues/3045)) ([c530b25](https://github.com/rsuite/rsuite/commit/c530b2550c62a8343eb759b60942858a0921c2a2))
* **DatePicker:** fixed oneTap to work in month view ([#2342](https://github.com/rsuite/rsuite/issues/2342)) ([d5368cd](https://github.com/rsuite/rsuite/commit/d5368cdfb2a6386bfb509a6316520e450f35f2b4))
* **DatePicker:** reset calendar selection after closing picker menu ([#2807](https://github.com/rsuite/rsuite/issues/2807)) ([1ef91a8](https://github.com/rsuite/rsuite/commit/1ef91a846fc6d99c7479e96994aa50da2af9ef9e))
* **DatePicker,DateRangePicker:** display month name as title of month calendar view ([#2660](https://github.com/rsuite/rsuite/issues/2660)) ([1e812ef](https://github.com/rsuite/rsuite/commit/1e812ef7510ea7b82beda7c058bd07080db198f5))
* **DatePicker,DateRangePicker:** fix the background color error when the cell is hovered ([#3018](https://github.com/rsuite/rsuite/issues/3018)) ([9d6f43e](https://github.com/rsuite/rsuite/commit/9d6f43e6db6049b7fdcc8514e071d870b785ecbb))
* **daterangepicker:** modify the `character`prop to be optional ([#1518](https://github.com/rsuite/rsuite/issues/1518)) ([6b77e52](https://github.com/rsuite/rsuite/commit/6b77e52a0271041ca53303b19340f11fd258334f))
* **DateRangePicker:** fix default time not working ([#2642](https://github.com/rsuite/rsuite/issues/2642)) ([915de28](https://github.com/rsuite/rsuite/commit/915de2820af418195e7f9a6ed228c1b05362d633))
* **DateRangePicker:** fix end time not using time on second calendar ([#2852](https://github.com/rsuite/rsuite/issues/2852)) ([b243567](https://github.com/rsuite/rsuite/commit/b243567520404b65bdb4d07d9a150f09730fd66e))
* **DateRangePicker:** fix end time will change with the start time ([#2841](https://github.com/rsuite/rsuite/issues/2841)) ([7fb38dd](https://github.com/rsuite/rsuite/commit/7fb38dd6aaf84e018d4f3e06882fb92dfa20e5bd))
* **DateRangePicker:** fix month not selectable on calendar ([#2312](https://github.com/rsuite/rsuite/issues/2312)) ([5199845](https://github.com/rsuite/rsuite/commit/5199845ee435e923c807da5e0813f4ba06a86798))
* **DateRangePicker:** fix Ok button not clickable ([#2564](https://github.com/rsuite/rsuite/issues/2564)) ([f80f94d](https://github.com/rsuite/rsuite/commit/f80f94db2a1c9c7738c3fc514e24c8ceb7b50d9b))
* **DateRangePicker:** fix predefined `ranges` cannot close picker ([#2614](https://github.com/rsuite/rsuite/issues/2614)) ([7773899](https://github.com/rsuite/rsuite/commit/7773899d5cda5ce53d556be85abc76f23166fc28))
* **DateRangePicker:** fix predefined range affecting calendar height ([#2794](https://github.com/rsuite/rsuite/issues/2794)) ([957ce4e](https://github.com/rsuite/rsuite/commit/957ce4e197355ecbb9a0aea6cb6c5906ab1e1a2a))
* **DateRangePicker:** fix predefined range and OK button conflict ([#2701](https://github.com/rsuite/rsuite/issues/2701)) ([e538d57](https://github.com/rsuite/rsuite/commit/e538d57e209548f2ca9c9b1f937e275181ae97d9))
* **DateRangePicker:** fix time on calendar changing with date change ([#2884](https://github.com/rsuite/rsuite/issues/2884)) ([77529af](https://github.com/rsuite/rsuite/commit/77529af661eac3abec994f146c3c7262a85f2009))
* **DateRangePicker:** improved experience for date range selection ([#2618](https://github.com/rsuite/rsuite/issues/2618)) ([225fc08](https://github.com/rsuite/rsuite/commit/225fc08e21d43c41d92c1514f67c05eb660bf9dd))
* **dropdown:** fix incorrect Dropdown caret position ([#1094](https://github.com/rsuite/rsuite/issues/1094)) ([0de9223](https://github.com/rsuite/rsuite/commit/0de9223175c4bda22dcabb4f4ca2270ee15f4d33)), closes [#1091](https://github.com/rsuite/rsuite/issues/1091)
* **dropdown:** fixed an issue where the menu and tooltip overlapped ([#1132](https://github.com/rsuite/rsuite/issues/1132)) ([fd8bcbf](https://github.com/rsuite/rsuite/commit/fd8bcbf9e20be550e32fd1561832743b6edc800f))
* **Dropdown:** fix `disabled` not working when trigger is set to hover or contextMenu ([#2740](https://github.com/rsuite/rsuite/issues/2740)) ([147821c](https://github.com/rsuite/rsuite/commit/147821c54ef7814820a91edb79e0923c99ab6d0b))
* **Dropdown:** fix error on deletion of last Dropdown.Item ([#2931](https://github.com/rsuite/rsuite/issues/2931)) ([8ed39e5](https://github.com/rsuite/rsuite/commit/8ed39e5673beb9224eded31096f5fa08297dfeed))
* **Dropdown:** Fix menu item hover highlight ([#2415](https://github.com/rsuite/rsuite/issues/2415)) ([59453cc](https://github.com/rsuite/rsuite/commit/59453cc0c3c6f648b2797c48473c22104e579b4a))
* **Dropdown:** fix vertical alignment of submenus ([#2524](https://github.com/rsuite/rsuite/issues/2524)) ([7c0ef52](https://github.com/rsuite/rsuite/commit/7c0ef52e9c7f57abfd97814725f5b3b82cc5dd70))
* **Dropdown:** Fixed Triggering onSelect twice on Dropdown Menu ([#2414](https://github.com/rsuite/rsuite/issues/2414)) ([e09eee5](https://github.com/rsuite/rsuite/commit/e09eee5f6dac88816ecbf8d20f3bb1b78f4afa71))
* **Dropdown.Menu:** de-highlight item when mouse leaving ([#2443](https://github.com/rsuite/rsuite/issues/2443)) ([0d7b963](https://github.com/rsuite/rsuite/commit/0d7b96350b79a41557d1a7b67140c9654755194e))
* **Dropdown.Menu:** fix custom className overriding rsuite classNames ([#2703](https://github.com/rsuite/rsuite/issues/2703)) ([db1a4db](https://github.com/rsuite/rsuite/commit/db1a4dbf5ddd7cbd4765e91f76bc4c4f8eb598c2))
* **Dropdown.Menu:** fix expected highlight item when focus moving in ([#2477](https://github.com/rsuite/rsuite/issues/2477)) ([b9fdea5](https://github.com/rsuite/rsuite/commit/b9fdea5d57ce76ddc80f5e9776feab02e4ebfacd))
* **DropdownMenu:** Fix the expanded state of the menu ([#1007](https://github.com/rsuite/rsuite/issues/1007)) ([4014cc0](https://github.com/rsuite/rsuite/commit/4014cc0221b3533b2b2dfc4197034f08fef3230b))
* **dts:** fix placeholder props definition for picker components ([#950](https://github.com/rsuite/rsuite/issues/950)) ([6171adf](https://github.com/rsuite/rsuite/commit/6171adf173dbacddab66429a6a448f8e0a64d0e9))
* **dts:** Fix Types.PlacementAuto definition ([#962](https://github.com/rsuite/rsuite/issues/962)) ([2a044a0](https://github.com/rsuite/rsuite/commit/2a044a05b6d396ddd0d85e53cbf9f69a7cd2143e))
* **focus:** fix outline style for form components when focused ([#2601](https://github.com/rsuite/rsuite/issues/2601)) ([0e2f9df](https://github.com/rsuite/rsuite/commit/0e2f9dffe5e882fc56727eb8ba8901aaf1b7d7b3))
* **Form:** make FormInstance methods non-nullable ([#2521](https://github.com/rsuite/rsuite/issues/2521)) ([225af8a](https://github.com/rsuite/rsuite/commit/225af8a9abdffaf76101f28e3690b7ede6a16139))
* **Form.Control:** apply className to accepter component ([#2662](https://github.com/rsuite/rsuite/issues/2662)) ([a164d28](https://github.com/rsuite/rsuite/commit/a164d287acfe8be2f98080e3b7eb15971f47809f))
* **Form.Control:** fix `acceptor` prop can not accept `Toggle` ([#3048](https://github.com/rsuite/rsuite/issues/3048)) ([43a413a](https://github.com/rsuite/rsuite/commit/43a413a0b96b3adb88deea54e41b56c582d4e3b6))
* **Form.Control:** shouldResetWithUnmount isn't working ([#3055](https://github.com/rsuite/rsuite/issues/3055)) ([98c7e1d](https://github.com/rsuite/rsuite/commit/98c7e1d1959e46a6bec97931f159abbaf32dd779))
* **Form.Control:** when shouldResetWithUnmount should remove value and error ([#2802](https://github.com/rsuite/rsuite/issues/2802)) ([f8d108a](https://github.com/rsuite/rsuite/commit/f8d108aed3e94811491be63e3373008d12e83b60))
* **Form.HelpText:** change font size to 12px ([#2968](https://github.com/rsuite/rsuite/issues/2968)) ([5c3898e](https://github.com/rsuite/rsuite/commit/5c3898ed2726beb81c09accd4d91963849d0dd31))
* **FormControl:** fix InputGroup not filling the container when fluid ([#2689](https://github.com/rsuite/rsuite/issues/2689)) ([d7b5550](https://github.com/rsuite/rsuite/commit/d7b55506d9810fd854c4ebe60c99a36e9fb9545e))
* **IconButton:** infer addtional props from as prop ([#2343](https://github.com/rsuite/rsuite/issues/2343)) ([3b6c25c](https://github.com/rsuite/rsuite/commit/3b6c25c103ed33a86baa47b8c757462da7ae8c4c))
* **Input:** fix missing focus ring when mouse hover ([#2702](https://github.com/rsuite/rsuite/issues/2702)) ([f548514](https://github.com/rsuite/rsuite/commit/f548514ed93945d27903190627d03380874d8f1a))
* **inputgroup:** fix a formControl use issue ([#1149](https://github.com/rsuite/rsuite/issues/1149)) ([bb0846f](https://github.com/rsuite/rsuite/commit/bb0846f9ab6f9803f244adc34f2263f9f397b97f))
* **inputgroup:** fix a styles issue for InputGroup component ([#1150](https://github.com/rsuite/rsuite/issues/1150)) ([1e628ef](https://github.com/rsuite/rsuite/commit/1e628efee13ab6ec8319b28846538c57fba45521))
* **InputGroup:** fix icons not being vertically centered within the input ([#2680](https://github.com/rsuite/rsuite/issues/2680)) ([b10a050](https://github.com/rsuite/rsuite/commit/b10a050fb52f6fbc23e2cc308d57d67a515596e7))
* **InputGroup.Addon:** extend props from as element ([#2559](https://github.com/rsuite/rsuite/issues/2559)) ([d0c947c](https://github.com/rsuite/rsuite/commit/d0c947c7a6ea5fd3ed95a71b573c957be4d5f009))
* **InputNumber:** fix `scrollable` not working ([#2915](https://github.com/rsuite/rsuite/issues/2915)) ([c76589e](https://github.com/rsuite/rsuite/commit/c76589e57c4f01d5b410672b6b7f703a6dfd6deb))
* **InputNumber:** fix unexpected focus ring when used within an InputGroup ([#2585](https://github.com/rsuite/rsuite/issues/2585)) ([6f76b57](https://github.com/rsuite/rsuite/commit/6f76b5752bca2e11639d7fe34dd927dd84c98f73))
* **InputNumber:** make plus/minus buttons unfocusable ([#2398](https://github.com/rsuite/rsuite/issues/2398)) ([ab4c721](https://github.com/rsuite/rsuite/commit/ab4c7218f20fd6aa6f4bad7818d403a3b6fd68df))
* **inputpicker:** fix InputNumber will not trigger onChange when input ([#1096](https://github.com/rsuite/rsuite/issues/1096)) ([1b653ad](https://github.com/rsuite/rsuite/commit/1b653ad5785fe4b4878491208849fac903d52a93))
* **inputpicker:** fix the input does not work when focused by keyboard ([b2dc612](https://github.com/rsuite/rsuite/commit/b2dc612abbc04b97b7a443e6428351f7d1216e3d))
* **inputpicker:** inputPicker should clear search keywords when closed ([679edc3](https://github.com/rsuite/rsuite/commit/679edc3b341a788468841f0d9c5aaa5606761185))
* **List:** fix helper/holder classname ([#2697](https://github.com/rsuite/rsuite/issues/2697)) ([cd2c42d](https://github.com/rsuite/rsuite/commit/cd2c42d4e3fc9659e3936bec26117cc79882420c))
* **listbox:** fix broken keyboard navigation after filtering ([#2491](https://github.com/rsuite/rsuite/issues/2491)) ([329623a](https://github.com/rsuite/rsuite/commit/329623a21e8d551db3e634894ddcbb3658b1579d))
* **listProps:** fix properties in listProps to be optional ([#2622](https://github.com/rsuite/rsuite/issues/2622)) ([650abbd](https://github.com/rsuite/rsuite/commit/650abbdd7b1073fb1a5a3d3ca761127ac2dcdd08))
* **Menubar:** fix unhandled nullish value ([#2478](https://github.com/rsuite/rsuite/issues/2478)) ([10d515d](https://github.com/rsuite/rsuite/commit/10d515d06dd08f2b93e5d7dbd3be7b1114185cab))
* **Message,Notification:** duration property migrated to `toaster.push` option ([#3065](https://github.com/rsuite/rsuite/issues/3065)) ([f18cc32](https://github.com/rsuite/rsuite/commit/f18cc32e4822fa3596b350efe0dc31f286b3918b))
* **modal:** fix input is not allowed to input text in Modal ([#1579](https://github.com/rsuite/rsuite/issues/1579)) ([f4ec497](https://github.com/rsuite/rsuite/commit/f4ec497cb9d8d45b36f8291017029f1516ced16d)), closes [#1570](https://github.com/rsuite/rsuite/issues/1570)
* **modal:** fixed the issue of height reduction when reopening Modal ([#1152](https://github.com/rsuite/rsuite/issues/1152)) ([9b8d674](https://github.com/rsuite/rsuite/commit/9b8d674c454aa33a6cb147cb77477cff16cef097)), closes [#1142](https://github.com/rsuite/rsuite/issues/1142)
* **Modal:** expose missing props ([#2522](https://github.com/rsuite/rsuite/issues/2522)) ([2ed7040](https://github.com/rsuite/rsuite/commit/2ed704002d03cec1478de879b08c0d3e7fd2dcf1))
* **Modal:** fix close button alignment and color ([#2973](https://github.com/rsuite/rsuite/issues/2973)) ([b1eb5b4](https://github.com/rsuite/rsuite/commit/b1eb5b406a29788290a704414cc5a19b115690c7))
* **MultiCascader:** fix load async data error in inline mode  ([#3015](https://github.com/rsuite/rsuite/issues/3015)) ([081eb14](https://github.com/rsuite/rsuite/commit/081eb14de9fb37d80a95324a669b8089e29ef03c)), closes [#3014](https://github.com/rsuite/rsuite/issues/3014)
* **MultiCascader:** fix unable to search for child items when `childKey` is set a value other than "children" ([#2926](https://github.com/rsuite/rsuite/issues/2926)) ([5d35f6c](https://github.com/rsuite/rsuite/commit/5d35f6c1639a49174274ccabf2edd3b40a388c32))
* **Nav:** fix incorrect height of <Nav.Menu>, fix [#2678](https://github.com/rsuite/rsuite/issues/2678) ([#2716](https://github.com/rsuite/rsuite/issues/2716)) ([8cefc64](https://github.com/rsuite/rsuite/commit/8cefc64ecfc6614bff4842b193f515064f0b5e3b))
* **Nav.Menu:** fix noCaret has No Effect on a Sub-menu ([#2960](https://github.com/rsuite/rsuite/issues/2960)) ([e51fb6b](https://github.com/rsuite/rsuite/commit/e51fb6b593f0221f2ac3288b55658d540db214f9))
* **Nav.Menu:** open with hover trigger in Navbar ([#3041](https://github.com/rsuite/rsuite/issues/3041)) ([ddbc325](https://github.com/rsuite/rsuite/commit/ddbc3253d5e714d03c5a43daa7bd2c52adec5638))
* **Navbar.Brand:** fix missing href prop ([#3007](https://github.com/rsuite/rsuite/issues/3007)) ([d0a1f27](https://github.com/rsuite/rsuite/commit/d0a1f276d63e25c295fbef94f82559333ba4c148))
* **overlay:** update the overlay to the correct position ([#1654](https://github.com/rsuite/rsuite/issues/1654)) ([8148b7a](https://github.com/rsuite/rsuite/commit/8148b7aaedf7747d13145f16e0684b1bef2e81ab))
* **overlaytrigger:** fix Whisper delay not working ([#1153](https://github.com/rsuite/rsuite/issues/1153)) ([0423da2](https://github.com/rsuite/rsuite/commit/0423da224caa940e189ede676fa12f526d19bf4a)), closes [#1143](https://github.com/rsuite/rsuite/issues/1143)
* **overlaytrigger:** rename `child` to `root` in OverlayTrigger instance ([05ce0ec](https://github.com/rsuite/rsuite/commit/05ce0ecd361ce796b4d8497842083570bdc8d6b2))
* **OverlayTrigger:** fix invalid rendering without followCursor ([#2600](https://github.com/rsuite/rsuite/issues/2600)) ([08abc8e](https://github.com/rsuite/rsuite/commit/08abc8e825af55d8334a6e6057d4f5582a3197ac))
* **Panel:** allow custom header in collapsible panels ([#2611](https://github.com/rsuite/rsuite/issues/2611)) ([6372d44](https://github.com/rsuite/rsuite/commit/6372d441235b5b65036c257608098df01f93bf6d))
* **Panel:** fix accordion not collapsible expanded panel ([#2514](https://github.com/rsuite/rsuite/issues/2514)) ([10c80f2](https://github.com/rsuite/rsuite/commit/10c80f26622e2f5b8c2e81731b66e2276d5622c4))
* **picker:** fixed the non-unique key in the Picker option when groupBy ([#1460](https://github.com/rsuite/rsuite/issues/1460)) ([5ca0fa0](https://github.com/rsuite/rsuite/commit/5ca0fa0573b188fdc1781ba2df99d8581ea75f58))
* **picker:** remove redundant ripple elements in PickerToggle ([#1092](https://github.com/rsuite/rsuite/issues/1092)) ([ca8cd14](https://github.com/rsuite/rsuite/commit/ca8cd145e55d056ba397b6ea7d6004de132b6d2d))
* **Picker:** add missing caretAs prop declaration ([#2592](https://github.com/rsuite/rsuite/issues/2592)) ([faabba4](https://github.com/rsuite/rsuite/commit/faabba4b32d82f819b5c5431c3d7040798db1765))
* **Picker:** fix async container update cause offset error ([#3126](https://github.com/rsuite/rsuite/issues/3126)) ([c3e15c5](https://github.com/rsuite/rsuite/commit/c3e15c512319b0240236e35a5b28432bea1d25f3))
* **Picker:** fix style dependency ([#2612](https://github.com/rsuite/rsuite/issues/2612)) ([0b5b1d6](https://github.com/rsuite/rsuite/commit/0b5b1d60909a069c317f069e9ab235da70eb4aa3))
* **Picker:** pass name prop to underlying input element ([#3275](https://github.com/rsuite/rsuite/issues/3275)) ([3b7cce5](https://github.com/rsuite/rsuite/commit/3b7cce56b90de2502b1f997ae0ff74918fcee718))
* **pickers:** fix the missing value on input in picker ([#1430](https://github.com/rsuite/rsuite/issues/1430)) ([7d06531](https://github.com/rsuite/rsuite/commit/7d065318a23388b36ec3b730ba17fc4d2d8a9e27))
* **pickers:** fixed picker will select children when set invalid value ([#1336](https://github.com/rsuite/rsuite/issues/1336)) ([dd99886](https://github.com/rsuite/rsuite/commit/dd9988604d4dc8cb3acd85937d923a7538020b83))
* **pickers:** Fixed the inability to pass the type check when the `labelKey` and `valueKey` of the pickers are changed. ([#1589](https://github.com/rsuite/rsuite/issues/1589)) ([ed1bea6](https://github.com/rsuite/rsuite/commit/ed1bea6814b882c740fd186325d2df6ac0c7a212))
* **pickers:** improve the logic of renderValue call ([#1151](https://github.com/rsuite/rsuite/issues/1151)) ([4f4c2c8](https://github.com/rsuite/rsuite/commit/4f4c2c8dc27ccf6506dafb37f7f52eee3a09dad1))
* **pickers:** picker should not be interactive during animation exit ([1f657b7](https://github.com/rsuite/rsuite/commit/1f657b7e42cc8689d6251a3492c877596aab72b6))
* **pickers:** the focused item should be within the container's viewport ([#2957](https://github.com/rsuite/rsuite/issues/2957)) ([cab5c63](https://github.com/rsuite/rsuite/commit/cab5c63ffde3963c72363adf00531ef3ab9d9e83))
* **popover:** set shadow to popover component ([#1360](https://github.com/rsuite/rsuite/issues/1360)) ([94c6851](https://github.com/rsuite/rsuite/commit/94c68517e48294f3030ede647cb5065090c1af70))
* **radio:** fixed the color of Radio in active state ([#1475](https://github.com/rsuite/rsuite/issues/1475)) ([bc9a3dd](https://github.com/rsuite/rsuite/commit/bc9a3dd793e560c1e1c849d8912ea19fd5f9dc3b))
* **Radio,Checkbox:** remove leading space for Radio/Checkbox in groups ([#3215](https://github.com/rsuite/rsuite/issues/3215)) ([27c1495](https://github.com/rsuite/rsuite/commit/27c14952da87c21612a8e822295eefc0908b08d6))
* **RadioGroup:** fix style in picker appearance ([#3274](https://github.com/rsuite/rsuite/issues/3274)) ([f673c85](https://github.com/rsuite/rsuite/commit/f673c85963973d2bbd9fc72c461d3a9718b3f25a))
* **RadioGroup:** unexpected wrapped text in picker appearance ([#3303](https://github.com/rsuite/rsuite/issues/3303)) ([c5aa81a](https://github.com/rsuite/rsuite/commit/c5aa81affab3333e6a29189d69c071d9208fbba8))
* **rangeslider:** fix RangeSlider style problem ([cfaa93e](https://github.com/rsuite/rsuite/commit/cfaa93e58f394f5f4e0c60b59c940be31bd43bff))
* **RangeSlider:** fix RangeSlider progress bar misalignment ([#2435](https://github.com/rsuite/rsuite/issues/2435)) ([e612ee3](https://github.com/rsuite/rsuite/commit/e612ee3b6bb97217ad08744c6b57b47e21397944))
* **rate:** fix the half-ratings style of Rate ([#1423](https://github.com/rsuite/rsuite/issues/1423)) ([f064f48](https://github.com/rsuite/rsuite/commit/f064f485da77a8e577de1995a13a1bffb03d0fb7))
* **rtl:** fix typos ([#1130](https://github.com/rsuite/rsuite/issues/1130)) ([9e878b9](https://github.com/rsuite/rsuite/commit/9e878b973d564d944fa8706abfe4ab890dc8cb05))
* **rtl:** fixed the docs not work when using `rtl` ([#1501](https://github.com/rsuite/rsuite/issues/1501)) ([9ee8ce3](https://github.com/rsuite/rsuite/commit/9ee8ce332a7e39e5d8d7b6ccdd81ec6b662a0f72))
* **Schema:** add missing Types.MixedType ([#3058](https://github.com/rsuite/rsuite/issues/3058)) ([b6c9654](https://github.com/rsuite/rsuite/commit/b6c965449f5eb1d13b72b02cfd16f454bc942c90))
* **select-picker:** fix SelectPicker not re-render when data is updated ([#1421](https://github.com/rsuite/rsuite/issues/1421)) ([0eb2a65](https://github.com/rsuite/rsuite/commit/0eb2a656dd84af99637e90a607a5c1f59660ab25))
* **SelectPicker:** call onSearch with empty string when closed ([#2411](https://github.com/rsuite/rsuite/issues/2411)) ([c6e5d54](https://github.com/rsuite/rsuite/commit/c6e5d54bdda0cdc61b65fbed78518ccef5d7672f))
* **SelectPicker:** fix display options not updating when data prop is updated ([#3319](https://github.com/rsuite/rsuite/issues/3319)) ([06c9cce](https://github.com/rsuite/rsuite/commit/06c9cce64ea27a756f87aa74a0af0287afdf106a))
* **SelectPicker:** make controlled value nullable ([#2591](https://github.com/rsuite/rsuite/issues/2591)) ([6619a75](https://github.com/rsuite/rsuite/commit/6619a75eca9eabf9bf08dd84dee78f1df0e094ca))
* **SelectPicker:** prevent error when listProps.itemSize is a number ([#3193](https://github.com/rsuite/rsuite/issues/3193)) ([151df47](https://github.com/rsuite/rsuite/commit/151df474b15ab4651d4ee5777b66018e58837816))
* **SelectPicker:** wrong padding for grouped options ([#3298](https://github.com/rsuite/rsuite/issues/3298)) ([e929f74](https://github.com/rsuite/rsuite/commit/e929f74273092855503f306f2e7e3362c716e574))
* **SelectPicker,CheckPicker:** add missing label prop declaration ([#2586](https://github.com/rsuite/rsuite/issues/2586)) ([e1a8cfe](https://github.com/rsuite/rsuite/commit/e1a8cfe32223ec210ac9a5ff793b973d4bcac131))
* **sidenav:** fixed display issue when sidenav was collapsed ([#1090](https://github.com/rsuite/rsuite/issues/1090)) ([a76ae59](https://github.com/rsuite/rsuite/commit/a76ae5970634017b8ec5fff19c7c90236cce98cb)), closes [#1084](https://github.com/rsuite/rsuite/issues/1084)
* **Sidenav:** correct Sidenav.Toggle styles ([#2497](https://github.com/rsuite/rsuite/issues/2497)) ([b3168e4](https://github.com/rsuite/rsuite/commit/b3168e426c3a2caad1689e9e9d3babf1d76022b8))
* **Sidenav:** correct subtle Sidenav item hover styles ([#2498](https://github.com/rsuite/rsuite/issues/2498)) ([2d853ee](https://github.com/rsuite/rsuite/commit/2d853ee8419a3283683bbf897442b9bc789b5a2a))
* **Sidenav:** display tooltip when hovering collapsed Sidenav item ([#2504](https://github.com/rsuite/rsuite/issues/2504)) ([d1238eb](https://github.com/rsuite/rsuite/commit/d1238ebb22e2458a780846903e042de72c1d8143))
* **Sidenav:** fix Sidenav multilevel Nav.Menu arrow icon exception ([#2986](https://github.com/rsuite/rsuite/issues/2986)) ([87f6748](https://github.com/rsuite/rsuite/commit/87f67482b60eae4ed445246fe3e6ac9b0cad0385))
* **Sidenav:** fix Sidenav.Toggle icon direction ([#2495](https://github.com/rsuite/rsuite/issues/2495)) ([c490632](https://github.com/rsuite/rsuite/commit/c490632cc613807ff27124140b4250fc132aa8b2))
* **Sidenav:** fix tooltip blocking menu items ([#2747](https://github.com/rsuite/rsuite/issues/2747)) ([d3568e1](https://github.com/rsuite/rsuite/commit/d3568e18fc5951340951a49c2ac121a786763dd9))
* **Sidenav:** hide focus ring when interacting with mouse ([#2311](https://github.com/rsuite/rsuite/issues/2311)) ([9413bc9](https://github.com/rsuite/rsuite/commit/9413bc9a48fb8a3f915cc811b3392ba4e65b0b70))
* **Sidenav:** remove subtle item bg when focused by mouse ([#2511](https://github.com/rsuite/rsuite/issues/2511)) ([819461c](https://github.com/rsuite/rsuite/commit/819461c918e809fa397fe3dc6146510a9ffb1bd2))
* **Sidenav:** remove underline from focused sidenav item ([#2387](https://github.com/rsuite/rsuite/issues/2387)) ([a22f569](https://github.com/rsuite/rsuite/commit/a22f569a8c3f2b71513af20b4be6607cd1825783))
* **slider:** fix Slider drag handle error ([#1082](https://github.com/rsuite/rsuite/issues/1082)) ([6ed14fb](https://github.com/rsuite/rsuite/commit/6ed14fb033368cd240c0d94a8cb77f26e4c00d44))
* **Slider,RangeSlider:** fix onChangeCommitted not triggered when the… ([#3472](https://github.com/rsuite/rsuite/issues/3472)) ([18a6e17](https://github.com/rsuite/rsuite/commit/18a6e17417bcb516701340b335c10ee3c7efa15a))
* **Stack:** filter children that should not be rendered ([#2732](https://github.com/rsuite/rsuite/issues/2732)) ([23c283f](https://github.com/rsuite/rsuite/commit/23c283f26da8ed9db4f4975c79b7cfe916f82903))
* **Stack:** fix spacing compat for chrome under 84 ([#2718](https://github.com/rsuite/rsuite/issues/2718)) ([a75b6a6](https://github.com/rsuite/rsuite/commit/a75b6a6b8cf0e2aa11abfde6205ddba57f458414))
* **steps:** fixed the description of <Steps> will break layout ([#1100](https://github.com/rsuite/rsuite/issues/1100)) ([0b07758](https://github.com/rsuite/rsuite/commit/0b07758abde497851ad73671e39b3848cf11d2e0)), closes [#1099](https://github.com/rsuite/rsuite/issues/1099)
* **table:** fixed unhandled scroll bar width when Cell is fixed on right ([#1486](https://github.com/rsuite/rsuite/issues/1486)) ([7e9ccc1](https://github.com/rsuite/rsuite/commit/7e9ccc177c9a7ed9e43dc1fa7b9c501bfbdc2863))
* **Table:** change `Table` locale prop to optional ([#1581](https://github.com/rsuite/rsuite/issues/1581)) ([ca15531](https://github.com/rsuite/rsuite/commit/ca15531b8f3c172244907360ac107d4c7ae171d3))
* **Table:** fix elements in merged cells being occluded ([#2513](https://github.com/rsuite/rsuite/issues/2513)) ([22e5467](https://github.com/rsuite/rsuite/commit/22e54671cbeb3e63d8480469c3d53744732308f2))
* **Table:** Fix missing typescript type definitions ([#1008](https://github.com/rsuite/rsuite/issues/1008)) ([a7ab349](https://github.com/rsuite/rsuite/commit/a7ab349db29f456ca3fa051bb923f6114b968f8a))
* **Table:** remove transition on hover of table row ([#2858](https://github.com/rsuite/rsuite/issues/2858)) ([9d26226](https://github.com/rsuite/rsuite/commit/9d26226004b618e8acb7b4d0802b1c3757b0a8e6))
* **tag-picker:** fix tag picker styles issue ([#1167](https://github.com/rsuite/rsuite/issues/1167)) ([4f4e88b](https://github.com/rsuite/rsuite/commit/4f4e88b28287466fdf8d2193454fb3c912c5e52a))
* **TagInput:** fix tag create during text composing ([#3244](https://github.com/rsuite/rsuite/issues/3244)) ([86451d7](https://github.com/rsuite/rsuite/commit/86451d73e611c6fb1f21e2f57b9ad9757430f219))
* **tagpicker:** fix tagpicker rendervalue styles ([#1376](https://github.com/rsuite/rsuite/issues/1376)) ([4fdf09d](https://github.com/rsuite/rsuite/commit/4fdf09d933954d5d010c110a0dc26e7c3aa3a300))
* **toaster:** fix style when message at the left ([#3138](https://github.com/rsuite/rsuite/issues/3138)) ([6084c2a](https://github.com/rsuite/rsuite/commit/6084c2a35cdd32db1e9a4ec560e9bfaadb7a173c))
* **Toaster:** code breaks when toaster is in a useEffect ([#2353](https://github.com/rsuite/rsuite/issues/2353)) ([d083fe2](https://github.com/rsuite/rsuite/commit/d083fe27013659cbc45196b7ead9ff5863404fb8)), closes [#2336](https://github.com/rsuite/rsuite/issues/2336)
* **Toggle:** add missing properties to onChange event target ([#2422](https://github.com/rsuite/rsuite/issues/2422)) ([5d1d5a2](https://github.com/rsuite/rsuite/commit/5d1d5a29a03f642c88aa66851163c9bb20d69684))
* **Toggle:** fix spinner size in sm/lg Toggles ([#3156](https://github.com/rsuite/rsuite/issues/3156)) ([896ee49](https://github.com/rsuite/rsuite/commit/896ee492bbdd2277dbe23f6667305ceaf9154a8a))
* **Tooltip:** should use the default text alignment ([#2965](https://github.com/rsuite/rsuite/issues/2965)) ([3280775](https://github.com/rsuite/rsuite/commit/3280775a699a3683b2c45b543fbd8e6576206142))
* **tree:** fix `spin` icon does not display when Tree is loaded async ([#1535](https://github.com/rsuite/rsuite/issues/1535)) ([0294a43](https://github.com/rsuite/rsuite/commit/0294a43ddf9404d727e2bf8ce456781974395ca5))
* **tree:** fix className of Tree and CheckTree ([#1456](https://github.com/rsuite/rsuite/issues/1456)) ([de79cbf](https://github.com/rsuite/rsuite/commit/de79cbf8697d9ba6ecf06eeb4dd1e9b86ac208fa))
* **tree:** revese Left and Right Arrow event in rtl ([#1337](https://github.com/rsuite/rsuite/issues/1337)) ([cfae655](https://github.com/rsuite/rsuite/commit/cfae65577cf808c8bb4d037ee0117fa2381dd0cb))
* **Tree:** fix Tree drag preview style error ([#3003](https://github.com/rsuite/rsuite/issues/3003)) ([4830148](https://github.com/rsuite/rsuite/commit/4830148b9e325bee926a2bfefe0786c08952ec79))
* **tree-picker:** fixed the icon problem in TreePicker ([#1382](https://github.com/rsuite/rsuite/issues/1382)) ([ba78f3c](https://github.com/rsuite/rsuite/commit/ba78f3c930259f819fffd6ee0ae517c0b74e597f))
* **treelike:** fix data item stringify throw error ([#2606](https://github.com/rsuite/rsuite/issues/2606)) ([3a586d2](https://github.com/rsuite/rsuite/commit/3a586d28e075b5bdd95d8df948ce4887570fab1d))
* **treepicker:** called onDragStart only when the node is draggable ([#1124](https://github.com/rsuite/rsuite/issues/1124)) ([4116939](https://github.com/rsuite/rsuite/commit/41169394b953e4a380bf345704f3e9fe6db1936c))
* **TreePicker:** fix tree node disabled still can interact ([#3232](https://github.com/rsuite/rsuite/issues/3232)) ([a57b058](https://github.com/rsuite/rsuite/commit/a57b058ba422caf612d5ffc1fd636101c62b605e))
* **TreePicker, CheckTreePicker:** ignore backspace when setting cleanable=false or disabled=true ([#2798](https://github.com/rsuite/rsuite/issues/2798)) ([eefe0eb](https://github.com/rsuite/rsuite/commit/eefe0ebc396ee1764243a1e2c8ec432dc6ce39a5))
* **TreePicker,CheckTreePicker:** fix `renderExtraFooter` causing the … ([#2745](https://github.com/rsuite/rsuite/issues/2745)) ([d7279d1](https://github.com/rsuite/rsuite/commit/d7279d14877e4b3b0ac74abdfeb56836b3a07780)), closes [#2758](https://github.com/rsuite/rsuite/issues/2758)
* **TreePicker,CheckTreePicker:** fix value being cleared internally when value is controlled ([#2788](https://github.com/rsuite/rsuite/issues/2788)) ([4521a27](https://github.com/rsuite/rsuite/commit/4521a2730a7311b7fe095d85e39966a1d56f5d9d)), closes [#2784](https://github.com/rsuite/rsuite/issues/2784)
* **ts:** fix errors in Typescript ([#1103](https://github.com/rsuite/rsuite/issues/1103)) ([2c75615](https://github.com/rsuite/rsuite/commit/2c75615359b7731c3feeafc7117aae5f45c327de)), closes [#1102](https://github.com/rsuite/rsuite/issues/1102)
* **typescript:** fix incorrect definition of Typescript ([#1640](https://github.com/rsuite/rsuite/issues/1640)) ([73bbe88](https://github.com/rsuite/rsuite/commit/73bbe88d0aa0eada1aa47d79d1a99f0d84357af9)), closes [#1633](https://github.com/rsuite/rsuite/issues/1633)
* **typescript:** fix incorrect definition of Typescript ([#1656](https://github.com/rsuite/rsuite/issues/1656)) ([87c5f3d](https://github.com/rsuite/rsuite/commit/87c5f3dfd7a3940892e64a4e9267febdda7a82b0))
* **typescript:** remove not-null assertion operator ([#2359](https://github.com/rsuite/rsuite/issues/2359)) ([5c07293](https://github.com/rsuite/rsuite/commit/5c07293f5c9c2d4deee768be17e8cea840868708))
* **typos:** fix typos in the docs ([#1502](https://github.com/rsuite/rsuite/issues/1502)) ([15e9170](https://github.com/rsuite/rsuite/commit/15e9170ffeb9eb555d841d4205641fcd6560222d))
* **uploader:** fix the style of Uploader in plaintext ([#1427](https://github.com/rsuite/rsuite/issues/1427)) ([dfb98ee](https://github.com/rsuite/rsuite/commit/dfb98ee6dbe1d23d8e8fe64671674f71ba40fe14))
* **uploader:** fix Uploader repeatedly triggering onChange event in IE11 ([#1156](https://github.com/rsuite/rsuite/issues/1156)) ([2361589](https://github.com/rsuite/rsuite/commit/2361589d417479a386c606f4be9f8db323f7c12a)), closes [#1141](https://github.com/rsuite/rsuite/issues/1141)
* **uploader:** fixed the status icon not showing during upload ([#1547](https://github.com/rsuite/rsuite/issues/1547)) ([8f24c69](https://github.com/rsuite/rsuite/commit/8f24c694c70c0e184a224be989ce022c806575b8))
* **Uploader:** correct type for status argument of onError callback ([#3273](https://github.com/rsuite/rsuite/issues/3273)) ([cdb3c74](https://github.com/rsuite/rsuite/commit/cdb3c7412e793c1d89958ea6fddabbf91d326575))
* **Uploader:** expose missing public types ([#2404](https://github.com/rsuite/rsuite/issues/2404)) ([5b1791f](https://github.com/rsuite/rsuite/commit/5b1791f0f0b23a230d03772178e9069bc16c8aa9))
* **useMediaQuery:** fix MediaQueryList not updating status when triggering change event ([#3503](https://github.com/rsuite/rsuite/issues/3503)) ([06b79dd](https://github.com/rsuite/rsuite/commit/06b79dda26ced54b070cda3fd6d70f96a7a7e373))
* **useTimeout:** fix callback not being called after timeout ([#2349](https://github.com/rsuite/rsuite/issues/2349)) ([e82a12a](https://github.com/rsuite/rsuite/commit/e82a12aa2929cf66e7a3c6d70008c5bedb4ab128))
* **v4:** sync the bugs fixed in v4 ([#1380](https://github.com/rsuite/rsuite/issues/1380)) ([9053982](https://github.com/rsuite/rsuite/commit/90539824f9206db31d2d72e4aaa86b73fec38552))
* **whisper:** fix overlay jittering when the cursor is hovered ([#1459](https://github.com/rsuite/rsuite/issues/1459)) ([d29e785](https://github.com/rsuite/rsuite/commit/d29e78500f8c0000fb83a53e34a2ba126e730b74))
* **Whisper:** add type checking for child components ([#3012](https://github.com/rsuite/rsuite/issues/3012)) ([c189119](https://github.com/rsuite/rsuite/commit/c18911903141423d79eb79d5313bc47dd974705e))
* **Whisper:** correct type declarations for ref ([856877a](https://github.com/rsuite/rsuite/commit/856877aec5a20710b94f6ddf241be76ecd34c88d))
* **Whisper:** fix delay and other related props not working ([#3499](https://github.com/rsuite/rsuite/issues/3499)) ([a54aee1](https://github.com/rsuite/rsuite/commit/a54aee1f37e05fcf4618077a9a59165051de2a5a))
* **Whisper:** specify speaker function argument types ([#2558](https://github.com/rsuite/rsuite/issues/2558)) ([6dda5c6](https://github.com/rsuite/rsuite/commit/6dda5c61d6f833174a576d814ce27287c92ed33f))
* `rowHeight` should be optional ([#913](https://github.com/rsuite/rsuite/issues/913)) ([6042b67](https://github.com/rsuite/rsuite/commit/6042b67a48a3e43115955fed64381657e54802bb))
* Cannot customize options in DatePicker shortcuts ([#242](https://github.com/rsuite/rsuite/issues/242)) ([2f4d3fe](https://github.com/rsuite/rsuite/commit/2f4d3fe44614db815ef29e7c3a935f97be37346c))
* change type annotation & format code ([be0c744](https://github.com/rsuite/rsuite/commit/be0c7447b3f5189b15b37a47f90a5d8b0cd4a79f))
* default import ([#678](https://github.com/rsuite/rsuite/issues/678)) ([8f13af6](https://github.com/rsuite/rsuite/commit/8f13af6347b05e1fcc727171dcbf256fb4d4c612))
* deformation in PlaceholderParagraph ([#420](https://github.com/rsuite/rsuite/issues/420)) ([1904d9a](https://github.com/rsuite/rsuite/commit/1904d9a07144085ce5190ce7d40be9739513b46f))
* examples/with-electron ([#1061](https://github.com/rsuite/rsuite/issues/1061)) ([0cce8fa](https://github.com/rsuite/rsuite/commit/0cce8fa71aed97072884a51881c7cdc3b94417f2))
* fix typescript type definition ([#1366](https://github.com/rsuite/rsuite/issues/1366)) ([9bfb445](https://github.com/rsuite/rsuite/commit/9bfb44544334862854d50a80758d2b78cf389887))
* fixed document sidenav icon ([3881e44](https://github.com/rsuite/rsuite/commit/3881e445329d890486fbd5e95223a0f019f2ee68))
* focus handler ([#2154](https://github.com/rsuite/rsuite/issues/2154)) ([3b17fbc](https://github.com/rsuite/rsuite/commit/3b17fbcae6da59ca58788c6b3aa60d79692dffa1))
* handle some null value branch ([#2323](https://github.com/rsuite/rsuite/issues/2323)) ([3ffd1d9](https://github.com/rsuite/rsuite/commit/3ffd1d966d5fd7f0a4f42bb8b08bf0cb65955fef))
* style of Placeholder ([#423](https://github.com/rsuite/rsuite/issues/423)) ([c223ffb](https://github.com/rsuite/rsuite/commit/c223ffb4efc293d1b195250f007cc10bc9f11955))
* support html tag in accepter ([#1106](https://github.com/rsuite/rsuite/issues/1106)) ([8cfcd76](https://github.com/rsuite/rsuite/commit/8cfcd76d9402cb5264d512b5cb42e36f484326e4))
* **TreePicker:** replace children with childrenKey ([2851f54](https://github.com/rsuite/rsuite/commit/2851f544801c47c2974fb03cadf65ea8e23c0473))
* **utils:** fix TypeError Cannot redefine property: prefix ([#1115](https://github.com/rsuite/rsuite/issues/1115)) ([273aba0](https://github.com/rsuite/rsuite/commit/273aba0396e3089a291041a90a237d214afbeaf4))
* mistake in type declare file ([#676](https://github.com/rsuite/rsuite/issues/676)) ([90ac581](https://github.com/rsuite/rsuite/commit/90ac5816c4b65404ff19c248d14fb16c5b37ea7d))
* remove height from rs-loader in rs-loader-{size} ([#1059](https://github.com/rsuite/rsuite/issues/1059)) ([4d25dc4](https://github.com/rsuite/rsuite/commit/4d25dc46d1d16c2e8155c2501aaf922002f253ec))
* The option value of `<InputPicker>` does not exist or is disabled and cannot be selected. ([#243](https://github.com/rsuite/rsuite/issues/243)) ([b644856](https://github.com/rsuite/rsuite/commit/b644856540330d0c0a4345a3214301183e712c1b))
* TreePicker keydown event does't work ([f864e35](https://github.com/rsuite/rsuite/commit/f864e3504409e3b0f66a9dd379c1fb220c52b998))
* update code style ([4114581](https://github.com/rsuite/rsuite/commit/41145814a43c9653bd682d60c7d330625b101d0f))
* **TreePicker:** replace children with childrenKey ([#365](https://github.com/rsuite/rsuite/issues/365)) ([61dbd97](https://github.com/rsuite/rsuite/commit/61dbd972c2eee4bf2e8ea7fd1520bdf10d1063dc))
* **use-controlled:** value doest't change when controlledValue changed ([#1742](https://github.com/rsuite/rsuite/issues/1742)) ([682eb2b](https://github.com/rsuite/rsuite/commit/682eb2bbd61540c4fd438c733bbd1ae5085c9651))


### Features

* **Avatar:** add support for `bordered` and `color` props ([#3711](https://github.com/rsuite/rsuite/issues/3711)) ([3ca7dc1](https://github.com/rsuite/rsuite/commit/3ca7dc1eeaf46461fff107012dac972d4ef20c1b))
* **Checkbox:** add support for `color` on `<Checkbox>` ([#3670](https://github.com/rsuite/rsuite/issues/3670)) ([a9e14ee](https://github.com/rsuite/rsuite/commit/a9e14ee834d612153e649ff14a54f5f83f6d6b2f))
* **Dropdown:** add support for `shortcut` on `<Dropdown.Item>` ([#3704](https://github.com/rsuite/rsuite/issues/3704)) ([2edac54](https://github.com/rsuite/rsuite/commit/2edac546c50a0bff2c827c9d3e2bab2e757bedc7))
* added czech locale ([#3649](https://github.com/rsuite/rsuite/issues/3649)) ([f589257](https://github.com/rsuite/rsuite/commit/f58925757314da09dd2a2ee0706321860a32ab13))
* Picker's onOpen & onClose should decouple with onEnter & onExit ([#3228](https://github.com/rsuite/rsuite/issues/3228)) ([09db561](https://github.com/rsuite/rsuite/commit/09db5610aa5c6d9051a35fd3e980f248459c4870))
* **Accordion:** add support for Accordion ([#3575](https://github.com/rsuite/rsuite/issues/3575)) ([1c81777](https://github.com/rsuite/rsuite/commit/1c817770db4e9d2e0ca9de0110c2537e7e677ae7))
* **cra:** supports using CRA to install javascript template ([#3538](https://github.com/rsuite/rsuite/issues/3538)) ([1b697f4](https://github.com/rsuite/rsuite/commit/1b697f4a4f61a7943351c5ca0f46a484c9ea1ac6))
* **cra:** supports using CRA to install typescript template ([#3540](https://github.com/rsuite/rsuite/issues/3540)) ([bbe3609](https://github.com/rsuite/rsuite/commit/bbe3609d4492e9186e32309f6c6ee6101d5eb83c))
* **CSS:** add compatibility for relative color syntax ([#3462](https://github.com/rsuite/rsuite/issues/3462)) ([a02eaa9](https://github.com/rsuite/rsuite/commit/a02eaa9b14dc374d503481a443051d413a9fd041))
* **CSS:** export individual CSS files for all components ([#3588](https://github.com/rsuite/rsuite/issues/3588)) ([616deff](https://github.com/rsuite/rsuite/commit/616deff9e44125e89fec10fdecabe1c3cbc8837b))
* **DateInput:** add support for DateInput ([#3492](https://github.com/rsuite/rsuite/issues/3492)) ([3095c03](https://github.com/rsuite/rsuite/commit/3095c037090b8366f39a98e9b275cd732e4dd069))
* **DatePicker:** supports date selection by using keyboard ([#3515](https://github.com/rsuite/rsuite/issues/3515)) ([bc56cb3](https://github.com/rsuite/rsuite/commit/bc56cb33fb15854a0d3f6c3c3bb6ee3b4036aef5))
* **DatePicker,DateRangePicker:** add support for onShortcutClick ([#3439](https://github.com/rsuite/rsuite/issues/3439)) ([ae00f90](https://github.com/rsuite/rsuite/commit/ae00f9045fd7dba95739f1f3fc8a21d671b6875b))
* **DateRangeInput:** add support for DateRangeInput ([#3525](https://github.com/rsuite/rsuite/issues/3525)) ([074245a](https://github.com/rsuite/rsuite/commit/074245a2f5f18028426d896584690d1738606d1c))
* **DateRangePicker:** add support for `showHeader` on DateRangePicker ([#3590](https://github.com/rsuite/rsuite/issues/3590)) ([1203c34](https://github.com/rsuite/rsuite/commit/1203c34e3420388cc534547c06433b8b58bc0405))
* **DateRangePicker:** supports date selection by using keyboard ([#3554](https://github.com/rsuite/rsuite/issues/3554)) ([2c8d197](https://github.com/rsuite/rsuite/commit/2c8d1974e018903b3a1b874566b31c751d207493))
* **Drawer:** add support for closeButton ([#3450](https://github.com/rsuite/rsuite/issues/3450)) ([90f25d0](https://github.com/rsuite/rsuite/commit/90f25d09e131e606c9ebd6dca41c0047e02f7908))
* **Form:** add support for `nestedField` prop on Form ([#3568](https://github.com/rsuite/rsuite/issues/3568)) ([47fce55](https://github.com/rsuite/rsuite/commit/47fce559b159f128fd2f89ffc36c0e9bcfd3f25b))
* **FormControl:** added support for `name` setting path of object  ([#3511](https://github.com/rsuite/rsuite/issues/3511)) ([03d5396](https://github.com/rsuite/rsuite/commit/03d5396b8a23d88907be9d1864776d61a0a3b963))
* **InlineEdit:** add support for InlineEdit ([#3614](https://github.com/rsuite/rsuite/issues/3614)) ([8ed7e6d](https://github.com/rsuite/rsuite/commit/8ed7e6d57b7ccd930bd72017a0a8299be0c21515))
* **Input:** add support for htmlSize prop ([#3526](https://github.com/rsuite/rsuite/issues/3526)) ([62de8ca](https://github.com/rsuite/rsuite/commit/62de8ca14eb2aaf8dde904b3667035cb3f060c23))
* **Tabs:** add support for Tabs ([#3597](https://github.com/rsuite/rsuite/issues/3597)) ([303350f](https://github.com/rsuite/rsuite/commit/303350fb3dd4abc20961a72b356132a1d5188685))
* **Typography:** add support for Heading and Text ([#3693](https://github.com/rsuite/rsuite/issues/3693)) ([b278b4e](https://github.com/rsuite/rsuite/commit/b278b4e2f76c40966b58cfeb11a1e165c547a3a1))
* add support for CascadeTree and MultiCascadeTree ([#3563](https://github.com/rsuite/rsuite/issues/3563)) ([524fc7a](https://github.com/rsuite/rsuite/commit/524fc7ac4810fd8128b7dea0b72b525f55d70401))
* **DatePicker:** add support `renderCell` on `<DatePicker>` ([#3641](https://github.com/rsuite/rsuite/issues/3641)) ([b63d1a3](https://github.com/rsuite/rsuite/commit/b63d1a37b0289383dbe0099481609097e1c4a436))
* **InputNumber:** add support for `formatter` on `<InputNumber>` ([#3642](https://github.com/rsuite/rsuite/issues/3642)) ([d457d3a](https://github.com/rsuite/rsuite/commit/d457d3a67d929fa02780e4d012844756361c7c68))
* **Message:** add support for `bordered` and `centered` props on Message ([#3605](https://github.com/rsuite/rsuite/issues/3605)) ([2e0f2ec](https://github.com/rsuite/rsuite/commit/2e0f2ec620bce242709acbeea0bff060abc848b4))
* **Radio:** add support for `color` on `<Radio>` ([#3672](https://github.com/rsuite/rsuite/issues/3672)) ([9406886](https://github.com/rsuite/rsuite/commit/9406886a59443f54a6e08d23025a0654dcd68bf0))
* **storybook:** add storybook examples for all components ([#3585](https://github.com/rsuite/rsuite/issues/3585)) ([48df8a9](https://github.com/rsuite/rsuite/commit/48df8a9fa081cfa08c7b97d35dae4757796e5872))
* **VisuallyHidden:** add support for VisuallyHidden ([#3571](https://github.com/rsuite/rsuite/issues/3571)) ([43544a0](https://github.com/rsuite/rsuite/commit/43544a075c79196159711405c1f696fb3a2a6625))
* improve accessibility of all pickers ([#3558](https://github.com/rsuite/rsuite/issues/3558)) ([8ad3cfd](https://github.com/rsuite/rsuite/commit/8ad3cfd4f1a2de16b52fec2bed5e4a9ea509f824))
* **useMediaQuery:** add a CSS media query hook ([#3234](https://github.com/rsuite/rsuite/issues/3234)) ([d2bfdd6](https://github.com/rsuite/rsuite/commit/d2bfdd661a0f6c75de3906dc6fba3d8f41176551))
* add annotations and link for components using JSDoc format ([#3498](https://github.com/rsuite/rsuite/issues/3498)) ([39d4e5f](https://github.com/rsuite/rsuite/commit/39d4e5ff8491472fa3ef93bb0af9f14ec6ca6037))
* **Modal,Drawer:** size prop supports number and string values ([#3103](https://github.com/rsuite/rsuite/issues/3103)) ([39741b7](https://github.com/rsuite/rsuite/commit/39741b755460e29cb8cfefb32bf4056b14cbf985))
* **TagPicker:** add support for renderMenuItemCheckbox ([#3481](https://github.com/rsuite/rsuite/issues/3481)) ([6b044e9](https://github.com/rsuite/rsuite/commit/6b044e9621db421ea75dc549da27d63493a91261))
* add loading prop for all pickers ([#3444](https://github.com/rsuite/rsuite/issues/3444)) ([3c5b2af](https://github.com/rsuite/rsuite/commit/3c5b2af3658bb44c8eb22f1c59f8a9c989c7e62e))
* **Button:** add startIcon and endIcon props ([#3067](https://github.com/rsuite/rsuite/issues/3067)) ([d3e967e](https://github.com/rsuite/rsuite/commit/d3e967e3be84ab6f76eb5a2415989a4f592c6674))
* **CSS:** use CSS custom properties instead of less variables ([#3428](https://github.com/rsuite/rsuite/issues/3428)) ([f6474e4](https://github.com/rsuite/rsuite/commit/f6474e490036cd8faf228332e2b7bd6b85902671))
* **TagPicker,TagInput:** add support for onTagRemove ([#3413](https://github.com/rsuite/rsuite/issues/3413)) ([96f96ab](https://github.com/rsuite/rsuite/commit/96f96abc974fb8b0200c0cc715275fcdcaee3736))
* add a script to prepend the use client directive ([#3407](https://github.com/rsuite/rsuite/issues/3407)) ([3812779](https://github.com/rsuite/rsuite/commit/38127797adb6d2409d7978df84039a5121f49629))
* **Button,Nav:** improved font color contrast in subtle appearance ([#3391](https://github.com/rsuite/rsuite/issues/3391)) ([266846a](https://github.com/rsuite/rsuite/commit/266846ac5cdeeb5a24e685da29a49460ea21ea92))
* **Calendar:** add a button to collapse the month and time view ([#2722](https://github.com/rsuite/rsuite/issues/2722)) ([b49bfaf](https://github.com/rsuite/rsuite/commit/b49bfaf5b553d1d13c17ba07951306147091ee44))
* **Calendar:** add cellClassName prop ([#3336](https://github.com/rsuite/rsuite/issues/3336)) ([cb7c2ae](https://github.com/rsuite/rsuite/commit/cb7c2aee30985219cb0d29155a3ae3d2f739d1d2)), closes [#3333](https://github.com/rsuite/rsuite/issues/3333)
* **Calendar:** add support for `onMonthChange` on `<Calendar>` ([#3150](https://github.com/rsuite/rsuite/issues/3150)) ([8dfe9d6](https://github.com/rsuite/rsuite/commit/8dfe9d6da95a55277d78f712b1d91ea56a70b9bb))
* **CustomProvider:** add support for disableRipple on `<CustomProvider>` ([#3030](https://github.com/rsuite/rsuite/issues/3030)) ([c6bb7ad](https://github.com/rsuite/rsuite/commit/c6bb7ade76ea843b43e799c5cb797b6b5e69d98f))
* **DatePicker:** allow ranges on left of calendar ([#2851](https://github.com/rsuite/rsuite/issues/2851)) ([ba2f7ee](https://github.com/rsuite/rsuite/commit/ba2f7ee1355ec70089557f4eab1614f53bfd6857)), closes [#2845](https://github.com/rsuite/rsuite/issues/2845)
* **DateRangePicker:** add `limitStartYear` prop ([#3163](https://github.com/rsuite/rsuite/issues/3163)) ([fd27df2](https://github.com/rsuite/rsuite/commit/fd27df21e1c36372ea8b444f79521c901a65780c))
* **Dropdown:** add Dropdown.Separator component ([#2979](https://github.com/rsuite/rsuite/issues/2979)) ([db6fcbb](https://github.com/rsuite/rsuite/commit/db6fcbbd88961e3506f6b2d2146cf43717d1e1db))
* **i18n:** add fr_FR locale ([#2735](https://github.com/rsuite/rsuite/issues/2735)) ([087cfc8](https://github.com/rsuite/rsuite/commit/087cfc885252d764864e075b086f5d980f94db94))
* **i18n:** added Hungarian locale (hu_HU) ([#3075](https://github.com/rsuite/rsuite/issues/3075)) ([4df03c2](https://github.com/rsuite/rsuite/commit/4df03c24660dc6b09417c562da0e1ffe68103bad))
* **i18n:** Create ne_NP.ts for Nepali Locale Support. ([#3351](https://github.com/rsuite/rsuite/issues/3351)) ([6a06508](https://github.com/rsuite/rsuite/commit/6a06508aeea245413bae2acecb520dc61c77e729))
* **InputPicker:** add shouldDisplayCreateOption prop ([#3270](https://github.com/rsuite/rsuite/issues/3270)) ([aa52b69](https://github.com/rsuite/rsuite/commit/aa52b690b4aa57918b12fc5a9684d7a59cef4f34))
* added Japanese locale (ja_JP)  ([#3254](https://github.com/rsuite/rsuite/issues/3254)) ([45ea93b](https://github.com/rsuite/rsuite/commit/45ea93bbd0014e88914ca1d2abf5edc2aec0586f))
* **DatePicker,DateRangePicker:** support to disable keyboard input ([#2673](https://github.com/rsuite/rsuite/issues/2673)) ([01ec4a8](https://github.com/rsuite/rsuite/commit/01ec4a8587d72842f0ae2d76ee51715e9bf7c6c2))
* **DateRangePicker:** supports placing predefined ranges on the left ([#2670](https://github.com/rsuite/rsuite/issues/2670)) ([8df4a61](https://github.com/rsuite/rsuite/commit/8df4a61d3b81e6054369197ff44e1416ea1aefbb))
* **i18n:** added Dutch locale (nl_NL) ([#3035](https://github.com/rsuite/rsuite/issues/3035)) ([47342c9](https://github.com/rsuite/rsuite/commit/47342c9373c02ce9393fd03693d9e45cc601a186))
* **List:** add size prop to ListItem ([#2714](https://github.com/rsuite/rsuite/issues/2714)) ([ed3b023](https://github.com/rsuite/rsuite/commit/ed3b02305ef603d2d1b60bedd849f6c946ef7127))
* **List:** allow sort with non-adjacent collection ([#2690](https://github.com/rsuite/rsuite/issues/2690)) ([24cfffb](https://github.com/rsuite/rsuite/commit/24cfffb32253e5da463807768318be22bc647ceb))
* **locales:** add Turkish locale file ([#2933](https://github.com/rsuite/rsuite/issues/2933)) ([7277d09](https://github.com/rsuite/rsuite/commit/7277d09f6e2fde3e3e4ac0786f20dd2efaeb9062))
* **locales:** added kk_KZ locale ([#2924](https://github.com/rsuite/rsuite/issues/2924)) ([779a65a](https://github.com/rsuite/rsuite/commit/779a65ad5c255b60a91959d7b9846346982009bb))
* **RadioTile:** add support for RadioTile ([#3208](https://github.com/rsuite/rsuite/issues/3208)) ([5cac8e1](https://github.com/rsuite/rsuite/commit/5cac8e12cdef95bc6a6de1333d5cb43ee02f1ab7))
* **SelectPicker,CheckPicker:** add `loading` prop ([#2808](https://github.com/rsuite/rsuite/issues/2808)) ([3a5e5d5](https://github.com/rsuite/rsuite/commit/3a5e5d5d4b891373c8a05ec4d642103f75920f10))
* **SelectPicker,CheckPicker:** add label prop ([#2572](https://github.com/rsuite/rsuite/issues/2572)) ([d00f442](https://github.com/rsuite/rsuite/commit/d00f442c46eb5edbb13d127b23f1c2eda6cf60d7))
* **Stack:** add `Item` to adjust single child ([#2730](https://github.com/rsuite/rsuite/issues/2730)) ([5af6256](https://github.com/rsuite/rsuite/commit/5af625690be33c54def844db3bcf6aa47cc72eed))
* **Table:** support for show full text when hovering over a cell ([#2862](https://github.com/rsuite/rsuite/issues/2862)) ([f8b7eeb](https://github.com/rsuite/rsuite/commit/f8b7eebd9b456c4d154695dcfc6c59ce0b82aeac))
* **Table:** support for show full text when hovering over a cell ([#2862](https://github.com/rsuite/rsuite/issues/2862)) ([5528225](https://github.com/rsuite/rsuite/commit/5528225c432b6e909ce3ee0d82240070886e3811))
* **Table:** support for show full text when hovering over a cell ([#2862](https://github.com/rsuite/rsuite/issues/2862)) ([fe2d769](https://github.com/rsuite/rsuite/commit/fe2d769a53549ec77f510b1d5075bb8c66511647))
* **Table:** support for show full text when hovering over a cell ([#2862](https://github.com/rsuite/rsuite/issues/2862)) ([6c4cf18](https://github.com/rsuite/rsuite/commit/6c4cf18bb9001940cbdbc9c9464faf5783691dc6))
* **Timeline:** add isItemActive prop ([#3198](https://github.com/rsuite/rsuite/issues/3198)) ([377930f](https://github.com/rsuite/rsuite/commit/377930f3498c59834a424417c136499866aacec2))
* **Tree,TreePicker,CheckTree,CheckTreePicker:** add onSelectItem prop ([#3172](https://github.com/rsuite/rsuite/issues/3172)) ([9a5618a](https://github.com/rsuite/rsuite/commit/9a5618a3affb13e70330a5aea253e8b54c67b61b))
* support React 18 ([#2595](https://github.com/rsuite/rsuite/issues/2595)) ([a071214](https://github.com/rsuite/rsuite/commit/a071214e4cffb2f9607887e776a52af42aed58cb)), closes [#2646](https://github.com/rsuite/rsuite/issues/2646) [#2661](https://github.com/rsuite/rsuite/issues/2661) [#2681](https://github.com/rsuite/rsuite/issues/2681) [#2776](https://github.com/rsuite/rsuite/issues/2776) [#2806](https://github.com/rsuite/rsuite/issues/2806) [#2826](https://github.com/rsuite/rsuite/issues/2826) [#2825](https://github.com/rsuite/rsuite/issues/2825)
* **AvatarGroup:** add support for AvatarGroup ([#2195](https://github.com/rsuite/rsuite/issues/2195)) ([2647bea](https://github.com/rsuite/rsuite/commit/2647bea5fcbe7148049ed5b6fa3118e86971572e))
* **carousel:** support `onSelect`, `onSlideEnd`, `onSlideStart` on `<Carousel>` ([#1889](https://github.com/rsuite/rsuite/issues/1889)) ([91e7b98](https://github.com/rsuite/rsuite/commit/91e7b9858637cbfe6b0e08f577cdadcbafa37505))
* **Carousel:** Expose active index ([#2338](https://github.com/rsuite/rsuite/issues/2338)) ([beac483](https://github.com/rsuite/rsuite/commit/beac48395c9fc7c30efb3f49f81e8969cd3ee71d))
* **Cascader:** add `renderSearchItem` for customizing search result ([#2427](https://github.com/rsuite/rsuite/issues/2427)) ([e1b1dbd](https://github.com/rsuite/rsuite/commit/e1b1dbd2fd6cde10dfb1e041d9483b6748a0855f))
* **Cascader:** add parent node in serach result while parentSelectable ([#2313](https://github.com/rsuite/rsuite/issues/2313)) ([e677bb6](https://github.com/rsuite/rsuite/commit/e677bb6b75d0cc26dafedc8e5326d413969c2867))
* **CustomProvider:** support `theme` on `<CustomProvider>` ([#1798](https://github.com/rsuite/rsuite/issues/1798)) ([cb5794c](https://github.com/rsuite/rsuite/commit/cb5794c67021321887bab92ab96372c69c55af09))
* **date-picker:** remove `inline` on `<DatePicker>` ([#1892](https://github.com/rsuite/rsuite/issues/1892)) ([83a77df](https://github.com/rsuite/rsuite/commit/83a77dffcea112fe07cc7c4cfc040fdb7b3e48a2))
* **DateRangePicker:** export type definition ([#2434](https://github.com/rsuite/rsuite/issues/2434)) ([76e4bc3](https://github.com/rsuite/rsuite/commit/76e4bc38e8e939ae6ffbcf5bc154281b4ec9360c))
* **DateRangePicker:** expose calendars renderTitle ([#2480](https://github.com/rsuite/rsuite/issues/2480)) ([4461e09](https://github.com/rsuite/rsuite/commit/4461e09ec3917f379b5df213db16cedade6f39e1))
* **dropdown:** support `renderToggle` on `<Dropdown>` ([#1843](https://github.com/rsuite/rsuite/issues/1843)) ([99c1925](https://github.com/rsuite/rsuite/commit/99c19254c8c6b2c301defb8d1be589e9aa8f4749))
* **Dropdown:** add `open` and `defaultOpen` props ([#2442](https://github.com/rsuite/rsuite/issues/2442)) ([ab13d63](https://github.com/rsuite/rsuite/commit/ab13d6368676c19f8a4fb041e84a423b1a810914))
* **Form:** export useFormClassNames hook ([#2420](https://github.com/rsuite/rsuite/issues/2420)) ([7e2bb85](https://github.com/rsuite/rsuite/commit/7e2bb8548103117a2df004f367fbde6609fcc216))
* **Form.Control:** add `rule` prop ([#2482](https://github.com/rsuite/rsuite/issues/2482)) ([d1917df](https://github.com/rsuite/rsuite/commit/d1917dfcb9474236f756551fa8908edc85e37197))
* **FormControl:**  support `shouldResetWithUnmount` on  `<FormControl>` ([#2468](https://github.com/rsuite/rsuite/issues/2468)) ([69dee5e](https://github.com/rsuite/rsuite/commit/69dee5ece1c20bdc1e1f42429e93150afb7995d8))
* **FormControl:** allow explicit default value ([#2182](https://github.com/rsuite/rsuite/issues/2182)) ([691ee38](https://github.com/rsuite/rsuite/commit/691ee3807d567a379b3e82195d2b2d303449a466))
* **grid:** synchronize all grid size and breakpoint with bootstrap5 ([e8d2d37](https://github.com/rsuite/rsuite/commit/e8d2d372e2280336482de648d9619607b9cb1798))
* **InputNumber:** support keyboard interaction ([#2294](https://github.com/rsuite/rsuite/issues/2294)) ([46993e2](https://github.com/rsuite/rsuite/commit/46993e235ca3d3ee8b6faa16a5fa11a8ed544e3b))
* **less:** expose primary palette variables ([#2532](https://github.com/rsuite/rsuite/issues/2532)) ([b1d187d](https://github.com/rsuite/rsuite/commit/b1d187da0f831a31d87f0e73ab28216d86394327))
* **locales:** Created fa_IR locale to add support of Persian language in Rsuite locals ([#2061](https://github.com/rsuite/rsuite/issues/2061)) ([14e5946](https://github.com/rsuite/rsuite/commit/14e59466cfd285ec1098d67280338a7df1ef8f5f))
* **MaskedInput:** added support for MaskedInput to replace `react-text-mask` ([#2054](https://github.com/rsuite/rsuite/issues/2054)) ([496416a](https://github.com/rsuite/rsuite/commit/496416a2e4b32362252ef70f5c4e40f785ecf5be))
* **nav:** improve NavItem visibility ([#1702](https://github.com/rsuite/rsuite/issues/1702)) ([8cb0b82](https://github.com/rsuite/rsuite/commit/8cb0b8239cf6a7f72cee6cf2fcb46d1a20af466c))
* **Nav.Menu:** add `openDirection` prop ([#2523](https://github.com/rsuite/rsuite/issues/2523)) ([bd824ac](https://github.com/rsuite/rsuite/commit/bd824ac9359cc5cebb848424d8045986e32c6462))
* **Pickers:** `groupBy` supports dot notation ([#2397](https://github.com/rsuite/rsuite/issues/2397)) ([2ba7c0b](https://github.com/rsuite/rsuite/commit/2ba7c0b622c68b2fc526aa7ad2feaa8e73767e9c))
* **RangeSlider:** add `constraint` prop ([#2291](https://github.com/rsuite/rsuite/issues/2291)) ([a2d38a8](https://github.com/rsuite/rsuite/commit/a2d38a8efe4f85c28ce1f4ee79a89eda1e1cf7b0))
* **Stack:** add Stack support to the layout ([#2199](https://github.com/rsuite/rsuite/issues/2199)) ([1ac132e](https://github.com/rsuite/rsuite/commit/1ac132e0fc98a6739dee07d9e6281202530d80fa))
* **table:** support `rowSpan` on `<Table.Column>` ([#1909](https://github.com/rsuite/rsuite/issues/1909)) ([34a3a1f](https://github.com/rsuite/rsuite/commit/34a3a1f6198073d18ea9d1a523aaf7c72b1c24ec))
* **tag-input:** add support for TagInput ([#1848](https://github.com/rsuite/rsuite/issues/1848)) ([eb66602](https://github.com/rsuite/rsuite/commit/eb66602cbe831518e61f9a2c602604fc43ec7255)), closes [#1265](https://github.com/rsuite/rsuite/issues/1265)
* **tag-picker:** support `trigger` on `<TagPicker>` ([#1847](https://github.com/rsuite/rsuite/issues/1847)) ([8ace065](https://github.com/rsuite/rsuite/commit/8ace065ddda7638057b0e0f365f83201da4b043f))
* **toaster:** add support for useToaster ([#2518](https://github.com/rsuite/rsuite/issues/2518)) ([75cb960](https://github.com/rsuite/rsuite/commit/75cb9601b56fbdc64a09b9bbc93aaf2b22b715c4))
* **Toggle:** add loading prop ([#2031](https://github.com/rsuite/rsuite/issues/2031)) ([28778de](https://github.com/rsuite/rsuite/commit/28778de0af0495a1bb68479bf3c679413255ce7b))
* **Tooltip,Popover:** add arrow props to hide arrow indicator ([48d876f](https://github.com/rsuite/rsuite/commit/48d876f7d2211f5e9cb1db7e8f552152821e05ac))
* **Tooltip,Popover:** add followCursor props to enable speaker follow cursor ([e3bf75d](https://github.com/rsuite/rsuite/commit/e3bf75d4e4c537bf677c404fce84b76266531630))
* **uploader:** support `disableMultipart` on `<Uploader>` ([#1862](https://github.com/rsuite/rsuite/issues/1862)) ([a6d7dcb](https://github.com/rsuite/rsuite/commit/a6d7dcbc43e428e8631e6d4e56bfa51e3c1b1e96))
* **Uploader:** support `method` on `<Uploader>` ([#2541](https://github.com/rsuite/rsuite/issues/2541)) ([d3b821a](https://github.com/rsuite/rsuite/commit/d3b821a8f2acbd3162ec965ffdbaac07af23a727))
* export WhisperInstance ([1c4eb5f](https://github.com/rsuite/rsuite/commit/1c4eb5ffbb6b5e69987436c03cc133f39c245866))
* **AutoComplete:** add  prop ([6d296d5](https://github.com/rsuite/rsuite/commit/6d296d5b416b8594916c7f5eb0c1bf53037e8145))
* **AutoComplete:** Support `filterBy` param ([#1063](https://github.com/rsuite/rsuite/issues/1063)) ([20fc6db](https://github.com/rsuite/rsuite/commit/20fc6dbefbf8474c2b5f0e59f246caef33f35e8a))
* **Breadcrumb:** Support `maxItem` and `onExpand` on `<Breadcrumb>` ([#1009](https://github.com/rsuite/rsuite/issues/1009)) ([98bbffe](https://github.com/rsuite/rsuite/commit/98bbffeeca4cd240c1f59a0830912d5c024b7cca))
* **cascader:** add `layer` parameter in `renderMenu` callback ([#1681](https://github.com/rsuite/rsuite/issues/1681)) ([1c6b1e0](https://github.com/rsuite/rsuite/commit/1c6b1e04daf643853a04f52b383337f6370d3841))
* **cascader:** support keyboard interaction on Cascader ([#1339](https://github.com/rsuite/rsuite/issues/1339)) ([252afdf](https://github.com/rsuite/rsuite/commit/252afdfa60cf54a94f825446206c28567a9122c6))
* **datepicker:** support keyboard input on DatePicker ([#1350](https://github.com/rsuite/rsuite/issues/1350)) ([36e3268](https://github.com/rsuite/rsuite/commit/36e32681fdefb016ec78ae1b01d3447b47199559))
* **daterangepicker:** support input and mask on DateRangePicker and DatePicker ([#1368](https://github.com/rsuite/rsuite/issues/1368)) ([4b47e09](https://github.com/rsuite/rsuite/commit/4b47e094c9bbecda4120fbbc2a28abf026da7ba7))
* **form:** support for data verification of complex object structure ([#1558](https://github.com/rsuite/rsuite/issues/1558)) ([d5b23f4](https://github.com/rsuite/rsuite/commit/d5b23f4172de5cf90b4d006709219acfc697739c))
* **form:** support plaintext on all form controls ([#1328](https://github.com/rsuite/rsuite/issues/1328)) ([a26dfc6](https://github.com/rsuite/rsuite/commit/a26dfc6a503658dae4f25ac75fc4823709bf5fa8))
* **hooks:** add the useWillUnmount hook and apply it to Modal ([#1607](https://github.com/rsuite/rsuite/issues/1607)) ([73e3948](https://github.com/rsuite/rsuite/commit/73e39486cc25bde15f6e34cf08f86df9792164e1))
* **icons:** update icon list ([#1363](https://github.com/rsuite/rsuite/issues/1363)) ([a9b584f](https://github.com/rsuite/rsuite/commit/a9b584f531656669a9ddc7775050dac390aa7670))
* **inputgroup:** supported use FormControl in InputGroup ([#1158](https://github.com/rsuite/rsuite/issues/1158)) ([dbb9d62](https://github.com/rsuite/rsuite/commit/dbb9d625dcf98204319c8e8c464c989318e604e7))
* **inputnumber:** support `scrollable` on `<InputNumber>` ([#1133](https://github.com/rsuite/rsuite/issues/1133)) ([26328f2](https://github.com/rsuite/rsuite/commit/26328f2064cff8d1cf7958bdb894531a424e9ef8)), closes [#1113](https://github.com/rsuite/rsuite/issues/1113)
* **inputpicker:** support onCreate on InputPicker and TagPicker ([#1645](https://github.com/rsuite/rsuite/issues/1645)) ([5f33fe9](https://github.com/rsuite/rsuite/commit/5f33fe9a65e3d4a46807258f4fa6998172cd5748))
* **IntlProvider:** Support `formatDate` on `<IntlProvider>` ([#1036](https://github.com/rsuite/rsuite/issues/1036)) ([9133c5b](https://github.com/rsuite/rsuite/commit/9133c5bbef607db429db4a05c92df367db04b87f))
* **locales:** add translations for German ([#1495](https://github.com/rsuite/rsuite/issues/1495)) ([b71ed41](https://github.com/rsuite/rsuite/commit/b71ed4151425b9068e42082af8a32d4228870cc6))
* **multi-cascader:** support onCheck on MultiCascader ([#1648](https://github.com/rsuite/rsuite/issues/1648)) ([0088a29](https://github.com/rsuite/rsuite/commit/0088a2963001a91b443fefdd1e3e1b6f4129a954))
* **nav-item:** support `tooltip` on NavItem ([#1680](https://github.com/rsuite/rsuite/issues/1680)) ([f25d569](https://github.com/rsuite/rsuite/commit/f25d5697e5b1fed26d777e5e7f8a83143fe0e381))
* **pagination:** added for support `layout` on Pagination ([#1533](https://github.com/rsuite/rsuite/issues/1533)) ([9713cd5](https://github.com/rsuite/rsuite/commit/9713cd51777124328ac82ae01af580ded2dbaf94))
* **pickers:** improve picker keyboard interaction experience ([#1700](https://github.com/rsuite/rsuite/issues/1700)) ([b3bde80](https://github.com/rsuite/rsuite/commit/b3bde80b44f81f9e1a35e0817fadfdbe9ba43c27))
* **pickers:** support `positionRef` on pickers ([#1148](https://github.com/rsuite/rsuite/issues/1148)) ([6fca975](https://github.com/rsuite/rsuite/commit/6fca9758ae8e4718d8fd5342808cfa9d58805ba9))
* **slider:** support `onChangeCommitted` on Slider and RangeSlider ([#1404](https://github.com/rsuite/rsuite/issues/1404)) ([fca8c86](https://github.com/rsuite/rsuite/commit/fca8c86ffe60d299912a585e02939d16ab8b73be)), closes [#1321](https://github.com/rsuite/rsuite/issues/1321)
* **slider:** support keyboard interaction on Slider and RangeSlider ([#1324](https://github.com/rsuite/rsuite/issues/1324)) ([8b1f6cf](https://github.com/rsuite/rsuite/commit/8b1f6cf01190237d024faa52aaee0dad8a75634f))
* **toaster:** add support for toaster ([#1246](https://github.com/rsuite/rsuite/issues/1246)) ([41b86db](https://github.com/rsuite/rsuite/commit/41b86db96f4e36d5156994bbf5731ddfaaf51a3a))
* **Tree:** expand node when searching ([#1075](https://github.com/rsuite/rsuite/issues/1075)) ([ecf0813](https://github.com/rsuite/rsuite/commit/ecf081311e1d4d6f192ee77002b95e772a7c4474))
* **Tree,CheckTree:** support showIndentLine on <Tree> and <CheckTree> ([#2181](https://github.com/rsuite/rsuite/issues/2181)) ([720768e](https://github.com/rsuite/rsuite/commit/720768e7ac89752f11b5387f76b1e5e36c54221d))
* **uploader:** support file async check on Uploader ([#1509](https://github.com/rsuite/rsuite/issues/1509)) ([4726c5a](https://github.com/rsuite/rsuite/commit/4726c5ae566e8f17f80448047b5770a59db68a2e))
* **Uploader:** add support for Button properties on Uploader ([#2688](https://github.com/rsuite/rsuite/issues/2688)) ([6c07781](https://github.com/rsuite/rsuite/commit/6c07781c13a1d46a9220511cd046d668ce593122))
* **whisper:** added support for `none` in `trigger` props on `Whisper` ([#1155](https://github.com/rsuite/rsuite/issues/1155)) ([0f53ee7](https://github.com/rsuite/rsuite/commit/0f53ee7a5638599843780e88cfc30cf3ad912a51)), closes [#1131](https://github.com/rsuite/rsuite/issues/1131)
* **whisper:** support `onClose` on the `speaker` prop of Whisper ([4ecad64](https://github.com/rsuite/rsuite/commit/4ecad647e5c4ed812cd913160eb24af114df08e2))
* **Whisper:** added support for trigger prop value `contextMenu` on `Whisper` ([491be3a](https://github.com/rsuite/rsuite/commit/491be3a055ee450acc718f3e1ebb975b4502884a))
* `rootPrefix` supports compound parameters ([268aef9](https://github.com/rsuite/rsuite/commit/268aef906d9cb3ba80b1d5413b539b6ef73f53c7))
* added translations for Spanish (Argentina & Spain) ([#1054](https://github.com/rsuite/rsuite/issues/1054)) ([8e0d840](https://github.com/rsuite/rsuite/commit/8e0d840f6869bd55b112091909f47661871fd8c0))
* improve the accessibility of Nav ([278696e](https://github.com/rsuite/rsuite/commit/278696eeca199a3b2a7dd629ae835c273c95615e))
* replace icon component ([#1359](https://github.com/rsuite/rsuite/issues/1359)) ([6ad16b9](https://github.com/rsuite/rsuite/commit/6ad16b95586149207c5704665c33d20d15b55fa5))
* support focus on form controls ([#1391](https://github.com/rsuite/rsuite/issues/1391)) ([820a31b](https://github.com/rsuite/rsuite/commit/820a31b70a96767a3f22d6ec1bdba83857f55b99))


### Performance Improvements

* **Button:** improved button color when hovered and activated ([#3022](https://github.com/rsuite/rsuite/issues/3022)) ([7973696](https://github.com/rsuite/rsuite/commit/7973696c2854d7199fc27d040dffe45dc356dc9a))
* **Cascader:** apply tree view pattern ([#2492](https://github.com/rsuite/rsuite/issues/2492)) ([f3a5808](https://github.com/rsuite/rsuite/commit/f3a5808eb60cc4f5250cce908322a702a91a9d96))
* **CheckPicker:** infer value and onChange types from data prop ([#2228](https://github.com/rsuite/rsuite/issues/2228)) ([eb4f9a8](https://github.com/rsuite/rsuite/commit/eb4f9a8f4c84cf30b3521532d95f4dc2490d0699))
* **CheckTreePicker:** improve performance when using large data  ([#2767](https://github.com/rsuite/rsuite/issues/2767)) ([651a8a1](https://github.com/rsuite/rsuite/commit/651a8a1ebb0bf1c1e07e1541ca1f0a61a96a3df4))
* **Context:** use `useMemo` to memozie the values returned to the Context Provider ([#2244](https://github.com/rsuite/rsuite/issues/2244)) ([d25a719](https://github.com/rsuite/rsuite/commit/d25a71920d38bceefcf100248173121d54be8313))
* **CSS transitions:** improved duration of transitions ([#3016](https://github.com/rsuite/rsuite/issues/3016)) ([d1829da](https://github.com/rsuite/rsuite/commit/d1829da2e77131e031479ef9aa4f6d00d6307a52))
* **date-fns:** use `date-fns-tz` instead of `date-fns-timezone` ([#1413](https://github.com/rsuite/rsuite/issues/1413)) ([1747d27](https://github.com/rsuite/rsuite/commit/1747d27956a0d8e3dc758199142a060a45c95820))
* **Dropdown:** improve contrast of active Dropdown item background color ([#2510](https://github.com/rsuite/rsuite/issues/2510)) ([35a418a](https://github.com/rsuite/rsuite/commit/35a418ae5f2104e6ac56ebe5c91d426025fce94a))
* Responsive for small screen ([#2293](https://github.com/rsuite/rsuite/issues/2293)) ([cadc42e](https://github.com/rsuite/rsuite/commit/cadc42e39baee174ff7d5577ea933cb471ef5bd0))
* **DatePicker:** improve date grid a11y ([#2220](https://github.com/rsuite/rsuite/issues/2220)) ([655178e](https://github.com/rsuite/rsuite/commit/655178e05afe5e4b4619bda3a222dc753766e13b))
* **Menu:** prevent uneccesary re-render when mouseove on menuitems ([#2148](https://github.com/rsuite/rsuite/issues/2148)) ([dc06498](https://github.com/rsuite/rsuite/commit/dc0649822fd68964281f44c4ec2daf84953edc63))
* **resize:** improve the rerender performance of components after resize ([#2135](https://github.com/rsuite/rsuite/issues/2135)) ([71648ab](https://github.com/rsuite/rsuite/commit/71648ab061f7b4057675de2d0a6e08f2f8a70a61))
* **styles:** simplify compound selectors over 4 levels ([#2282](https://github.com/rsuite/rsuite/issues/2282)) ([304e8da](https://github.com/rsuite/rsuite/commit/304e8da0c2057d148bbad36674aba33382439949))
* improve accessibility with ARIA ([#1323](https://github.com/rsuite/rsuite/issues/1323)) ([24b4379](https://github.com/rsuite/rsuite/commit/24b43791e1c69f9bf4b7eed94240e034543ccf81))
* remove deprecated code ([1ef99b1](https://github.com/rsuite/rsuite/commit/1ef99b10084a6d3c6bf61619ab9deb5c4d54c33a))
* **selectpicker:** adjust the dependency of Picker ([1fc5f24](https://github.com/rsuite/rsuite/commit/1fc5f24dd340027695bbc243724e3f254fe43d4b))


### Reverts

* Revert "refactor(SelectPicker): move grouped options into group element (#3313)" (#3389) ([8b327e3](https://github.com/rsuite/rsuite/commit/8b327e371afbac9f6eb431191900a2ddcaa66ce1)), closes [#3313](https://github.com/rsuite/rsuite/issues/3313) [#3389](https://github.com/rsuite/rsuite/issues/3389)
* Revert "test: cross browser testing on browserstack (#1917)" (#1922) ([16d76de](https://github.com/rsuite/rsuite/commit/16d76de5475981222d0db0d6288369af413ee795)), closes [#1917](https://github.com/rsuite/rsuite/issues/1917) [#1922](https://github.com/rsuite/rsuite/issues/1922)
* Revert "fix: MultiCascader  data cann't be controlled (#1696)" (#1746) ([6fe605a](https://github.com/rsuite/rsuite/commit/6fe605a325429fc82357adafab92795528eface1)), closes [#1696](https://github.com/rsuite/rsuite/issues/1696) [#1746](https://github.com/rsuite/rsuite/issues/1746)
* Revert "Update common.d.ts (#1192)" (#1204) ([97e991d](https://github.com/rsuite/rsuite/commit/97e991dfc87e9a3856b2807c4588c58a43e09347)), closes [#1192](https://github.com/rsuite/rsuite/issues/1192) [#1204](https://github.com/rsuite/rsuite/issues/1204)
* Revert "Export component props (#1066)" (#1067) ([d797ae2](https://github.com/rsuite/rsuite/commit/d797ae246ee88138e59a4ba88d239b4c5c40aa2a)), closes [#1066](https://github.com/rsuite/rsuite/issues/1066) [#1067](https://github.com/rsuite/rsuite/issues/1067)
* Revert "chore: Upgrade date-fns to v2 (#924)" (#966) ([1d45843](https://github.com/rsuite/rsuite/commit/1d4584369aa70cf00254bda7ef30759d5aa37dda)), closes [#924](https://github.com/rsuite/rsuite/issues/924) [#966](https://github.com/rsuite/rsuite/issues/966)
* Revert "Modify @btn-link-color equal to @link-color. (#954)" (#958) ([94eda84](https://github.com/rsuite/rsuite/commit/94eda8445148a45041d9dfefe2a45fcfa797dabb)), closes [#954](https://github.com/rsuite/rsuite/issues/954) [#958](https://github.com/rsuite/rsuite/issues/958)
* Revert "docs: Gray rsuite logos on 2020/4/4 (#942)" (#949) ([608e393](https://github.com/rsuite/rsuite/commit/608e39313758706d8a26c3f63365864f2a92806b)), closes [#942](https://github.com/rsuite/rsuite/issues/942) [#949](https://github.com/rsuite/rsuite/issues/949)
* Revert "Added mourning to doc site (#943)" (#944) ([4dfc088](https://github.com/rsuite/rsuite/commit/4dfc088b6545b0573dc2ad1fe79a613ae32e55b2)), closes [#943](https://github.com/rsuite/rsuite/issues/943) [#944](https://github.com/rsuite/rsuite/issues/944)
* Revert "Added rest props to <Tooltip> (#789)" (#793) ([8291b65](https://github.com/rsuite/rsuite/commit/8291b6542ec7c38b711a4a192847d2c71df0ef5b)), closes [#789](https://github.com/rsuite/rsuite/issues/789) [#793](https://github.com/rsuite/rsuite/issues/793)
* Revert "update:Don't set .form-control-wrapper display when form is horizontal (#110)" (#111) ([2e06b26](https://github.com/rsuite/rsuite/commit/2e06b26b332cbb225d2689825e2d9c7db31389b5)), closes [#110](https://github.com/rsuite/rsuite/issues/110) [#111](https://github.com/rsuite/rsuite/issues/111)


* Rewrite style system (#1476) ([19ed855](https://github.com/rsuite/rsuite/commit/19ed8554e108ebe0a562c399c6e0124df66bb63b)), closes [#1476](https://github.com/rsuite/rsuite/issues/1476) [#1671](https://github.com/rsuite/rsuite/issues/1671) [#1679](https://github.com/rsuite/rsuite/issues/1679)
* Split FormControlAccepterProps from FormControlProps (#1098) ([089ea75](https://github.com/rsuite/rsuite/commit/089ea752061fef64ab730b27e8033c3153c46c10)), closes [#1098](https://github.com/rsuite/rsuite/issues/1098)


### BREAKING CHANGES

* deprecate Navbar.Header and Navbar.Body

* refactor(styles): re-org Sidenav styles

* refactor(styles): re-org Pagination styles

* refactor(styles): re-org Button styles

* refactor(styles): re-org InputGroup styles

* refactor(styles): re-org InputNumber styles

* refactor(styles): re-org AutoComplete styles

* refactor(styles): re-org SelectPicker styles

* refactor(styles): re-org CheckPicker styles

* refactor(styles): re-org Checkbox styles

* refactor(styles): re-org Radio styles

* refactor(styles): re-org Toggle styles

* refactor(styles): re-org Rate styles

* refactor(styles): re-org Slider styles

* refactor(styles): re-org Uploader styles

* refactor(styles): re-org Cascader styles

* refactor(styles): remove iconfont related styles

* refactor(styles): re-org Avatar styles

* refactor(styles): re-org Badge styles

* refactor(styles): re-org Tag styles

* refactor(styles): re-org Carousel styles

* refactor(styles): re-org ButtonToolbar styles

* refactor(styles): re-org ButtonGroup styles

* refactor(styles): re-org Animation styles

* refactor(styles): re-org Panel styles

* refactor(styles): re-org List styles

* refactor(styles): re-org Timeline styles

* refactor(styles): re-org Table styles

* refactor(styles): re-org CloseButton styles

* refactor(styles): re-org Modal and Drawer styles

* refactor(styles): re-org IconButton styles

* refactor(styles): re-org Form styles

* refactor(styles): re-org toaster styles

* refactor(styles): re-org Message styles

* docs(theme): add rs-theme- classes on container element

* refactor(theme): use rs-theme- classes to determine color theme

* refactor(styles): remove unused files in Ripple

* refactor(styles): re-org CheckTree and CheckTreePicker styles

* refactor(styles): re-org Picker styles

* refactor(styles): re-org Tree and TreePicker styles

* refactor(styles): re-org InputPicker styles

* refactor(styles): re-org Calendar styles

* refactor(styles): re-org DatePicker and DateRangePicker styles

* refactor(styles): unify theme styles

* refactor(button): alter default button background color

* refactor(styles): remove unused less variables

* docs: use unified themes

* refactor(styles): split themes mixins

* refactor(styles): split non-common keyframes

* refactor(styles): re-order imports

* refactor(styles): remove unused global utility classes

* refactor(styles): remove unused common mixins

* refactor(styles): remove keyframe.less

* refactor(styles): rename core.less to common

* refactor(styles): transform palette hack mixin into less plugin

* refactor(styles): fix palette plugin output type

* test(styles): fix button style tests

* test(styles): fix missing imports that prevent tests running

* fix(styles): fix primary border color in default theme

* chore(deps): re-generate package-lock.json

* style: prettier format

* chore(deps): downgrade eslint-plugin-react to 7.20.3 to avoid issues

* style: upgrade stylelint and resolve violations

* refactor(styles): simplify ripple related styles

* refactor(styles): re-org button styles in different states

* refactor(styles): re-org icon-button in different states

* refactor(styles): remove .rs-btn-default class

* refactor(styles): re-org Button sizing mixins

* refactor(styles): re-org Ripple styles and mixins

* docs: fix docs.css missing from docs app

* chore(stylelint): add stylelint-config-prettier

* docs: add docs for less plugins

* refactor(styles): re-org primary and secondary palettes

* refactor(styles): remove unused color variables in dark theme

* refactor(styles): split theme palette and functional colors

* refactor(styles): remove direct use of gray/highlight levels

* refactor(styles): fix icon button in primary appearance

* refactor(styles): remove redundant color variables from dark theme

* build: omit javascriptEnabled option for less

* chore: eslint ignore less plugins

* refactor(styles): prefix css variables with rs instead of rs-color

* refactor(styles): re-org color themes inclusion

* refactor(styles): re-org variable declarations

* docs(button): fix custom combination example

* refactor(nav): remove margins between nav items

* refactor(styles): replace stateful color variables with semantic colors

* refactor(styles): separate color variables for light/dark modes

* feat(styles): add variable for toggling dark mode inclusion

* fix(styles): fix styling test failures

* test(autocomplete): fix test failures

* test(cascader): fix test failures due to dom change

* test(inputpicker): fix test failures due to dom change

* test(picker): fix test failures due to dom change

* test(selectpicker): fix test failures due to dom change

* chore: skip checking style existence

* build: fix build scripts for stylesheets

* fix(styles): fix incorrect casing in importing paths

* docs: fix button heights in toolbar

* docs: fix button style in codeview toolbar

* fix(styles): remove dark mode styles when enable-dark-mode is false

* docs: add docs for dark mode

* docs(customize): replace deprecated variables with new ones

* fix(message): re-org Message styles
* deprecate Drawer.Footer in favor of new Drawer.Actions

feat(drawer): improve close button placement and appearance

feat(drawer): deprecate Drawer.Footer replaced with Drawer.Actions

fix(drawer): fix drawer body overflow height

style(drawer): remove redundant comments

* fix(drawer): remove classes incorrectly assigned to close button

* fix(radiogroup): fix radio group picker width
* remove value and onChange from FormControlProps

* style: Fix code styling with prettier

* fix(ts): Revert removing value and onChange from FormControlProps



# [5.59.0](https://github.com/rsuite/rsuite/compare/v5.58.1...v5.59.0) (2024-04-03)


### Bug Fixes

* **DatePicker,DateRangePicker:** fix the date change when the input date is incomplete ([#3719](https://github.com/rsuite/rsuite/issues/3719)) ([24f162f](https://github.com/rsuite/rsuite/commit/24f162f6ee403dbca0829159f3a099167b278bcf))
* **Drawer:** fix the focus cannot be moved to elements outside the Drawer when `backdrop=false` ([#3716](https://github.com/rsuite/rsuite/issues/3716)) ([f044445](https://github.com/rsuite/rsuite/commit/f044445e97d653debcb1772a70c51b4a30d44f6b))


### Features

* **Avatar:** add support for `bordered` and `color` props ([#3711](https://github.com/rsuite/rsuite/issues/3711)) ([3ca7dc1](https://github.com/rsuite/rsuite/commit/3ca7dc1eeaf46461fff107012dac972d4ef20c1b))



## [5.58.1](https://github.com/rsuite/rsuite/compare/v5.58.0...v5.58.1) (2024-03-28)


### Bug Fixes

* fix build errors caused by export type ([#3712](https://github.com/rsuite/rsuite/issues/3712)) ([94e9ef4](https://github.com/rsuite/rsuite/commit/94e9ef423c7722ecfa4ed3d72a320b38f13a0c6d))



# [5.58.0](https://github.com/rsuite/rsuite/compare/v5.57.0...v5.58.0) (2024-03-28)


### Bug Fixes

* **TagPicker:** fix TagPicker size issue ([#3702](https://github.com/rsuite/rsuite/issues/3702)) ([3319e12](https://github.com/rsuite/rsuite/commit/3319e127f00ea84150c2a08f6eb0a7a042ce32f1))


### Features

* **Dropdown:** add support for `shortcut` on `<Dropdown.Item>` ([#3704](https://github.com/rsuite/rsuite/issues/3704)) ([2edac54](https://github.com/rsuite/rsuite/commit/2edac546c50a0bff2c827c9d3e2bab2e757bedc7))
* Picker's onOpen & onClose should decouple with onEnter & onExit ([#3228](https://github.com/rsuite/rsuite/issues/3228)) ([09db561](https://github.com/rsuite/rsuite/commit/09db5610aa5c6d9051a35fd3e980f248459c4870))
* **Typography:** add support for Heading and Text ([#3693](https://github.com/rsuite/rsuite/issues/3693)) ([b278b4e](https://github.com/rsuite/rsuite/commit/b278b4e2f76c40966b58cfeb11a1e165c547a3a1))



# [5.57.0](https://github.com/rsuite/rsuite/compare/v5.56.0...v5.57.0) (2024-03-22)


### Bug Fixes

* **InlineEdit:** fix type conflict for defined `children` ([#3685](https://github.com/rsuite/rsuite/issues/3685)) ([619c455](https://github.com/rsuite/rsuite/commit/619c4551329f3e83be8f862c4cc02bb15245d0de))
* **Loader:** set correct ARIA properties for Loader ([#3691](https://github.com/rsuite/rsuite/issues/3691)) ([92505e2](https://github.com/rsuite/rsuite/commit/92505e258303e9be52d8771e2eedcd147e79406c))
* fix the problem that useToaster cannot be imported on demand and update the docs directory ([#3689](https://github.com/rsuite/rsuite/issues/3689)) ([1e4f4e3](https://github.com/rsuite/rsuite/commit/1e4f4e3ea37c20442faced375a697169a659ba56))


### Features

* add support for CascadeTree and MultiCascadeTree ([#3563](https://github.com/rsuite/rsuite/issues/3563)) ([524fc7a](https://github.com/rsuite/rsuite/commit/524fc7ac4810fd8128b7dea0b72b525f55d70401))



# [5.56.0](https://github.com/rsuite/rsuite/compare/v5.55.1...v5.56.0) (2024-03-15)


### Bug Fixes

* examples/with-gatsby/package.json to reduce vulnerabilities ([#3583](https://github.com/rsuite/rsuite/issues/3583)) ([2f10776](https://github.com/rsuite/rsuite/commit/2f10776c541b2616b9eef9f8e34e4758d3451f77))
* **Checkbox:** listen for click events on the correct element ([#3666](https://github.com/rsuite/rsuite/issues/3666)) ([cd43df5](https://github.com/rsuite/rsuite/commit/cd43df5feee868ad411fa4da54635b54d2d25934))
* **TagGroup:** fix css entry in nested children ([#3663](https://github.com/rsuite/rsuite/issues/3663)) ([fc59018](https://github.com/rsuite/rsuite/commit/fc590180066e26cbfba28428b4db54f6f4a070dc))


### Features

* **Checkbox:** add support for `color` on `<Checkbox>` ([#3670](https://github.com/rsuite/rsuite/issues/3670)) ([a9e14ee](https://github.com/rsuite/rsuite/commit/a9e14ee834d612153e649ff14a54f5f83f6d6b2f))
* **Radio:** add support for `color` on `<Radio>` ([#3672](https://github.com/rsuite/rsuite/issues/3672)) ([9406886](https://github.com/rsuite/rsuite/commit/9406886a59443f54a6e08d23025a0654dcd68bf0))



## [5.55.1](https://github.com/rsuite/rsuite/compare/v5.55.0...v5.55.1) (2024-03-08)


### Bug Fixes

* **Calendar:** fix misalignment of month selection menu layout ([#3655](https://github.com/rsuite/rsuite/issues/3655)) ([eff9702](https://github.com/rsuite/rsuite/commit/eff9702977d893caa0c701dba03b19a44d56799a))
* **DatePicker,DateRangePicker:** fix the problem of padding ([#3659](https://github.com/rsuite/rsuite/issues/3659)) ([47f84f4](https://github.com/rsuite/rsuite/commit/47f84f4a3d2e3d4bd716a40ae78cb792ac779380))
* **Message:** fix the z-index issue of Message in full screen state ([#3658](https://github.com/rsuite/rsuite/issues/3658)) ([f899b92](https://github.com/rsuite/rsuite/commit/f899b9254b694e61306ab096d324d19870bc9709))
* **nav:** default appearance doesn't show an active background when focused ([#3654](https://github.com/rsuite/rsuite/issues/3654)) ([3dcf943](https://github.com/rsuite/rsuite/commit/3dcf943a8e6811f4369ed858fba671e7783ef6f7))



# [5.55.0](https://github.com/rsuite/rsuite/compare/v5.54.0...v5.55.0) (2024-03-01)


### Bug Fixes

* **DateRangePicker:** fix time picker does not update when clicking the shortcut item ([#3647](https://github.com/rsuite/rsuite/issues/3647)) ([00c9eaa](https://github.com/rsuite/rsuite/commit/00c9eaa9b246da027c729fb3cf3639001473d4fe))
* **Pagination:** fix SelectPicker rendering misalignment ([#3643](https://github.com/rsuite/rsuite/issues/3643)) ([044c48f](https://github.com/rsuite/rsuite/commit/044c48f3e358f93bc7568bc83242e7ea6348825e))
* **Slider,RangeSlider:** fix touch event not working ([#3653](https://github.com/rsuite/rsuite/issues/3653)) ([3d57ebc](https://github.com/rsuite/rsuite/commit/3d57ebcaebafa3207b84987ba7e80cd4c38a2741))


### Features

* added czech locale ([#3649](https://github.com/rsuite/rsuite/issues/3649)) ([f589257](https://github.com/rsuite/rsuite/commit/f58925757314da09dd2a2ee0706321860a32ab13))
* **DatePicker:** add support `renderCell` on `<DatePicker>` ([#3641](https://github.com/rsuite/rsuite/issues/3641)) ([b63d1a3](https://github.com/rsuite/rsuite/commit/b63d1a37b0289383dbe0099481609097e1c4a436))
* **InputNumber:** add support for `formatter` on `<InputNumber>` ([#3642](https://github.com/rsuite/rsuite/issues/3642)) ([d457d3a](https://github.com/rsuite/rsuite/commit/d457d3a67d929fa02780e4d012844756361c7c68))



# [5.54.0](https://github.com/rsuite/rsuite/compare/v5.53.2...v5.54.0) (2024-02-22)


### Bug Fixes

* **DatePicker:** fix style error of the bottom button in the datePicker ([#3634](https://github.com/rsuite/rsuite/issues/3634)) ([536ad7e](https://github.com/rsuite/rsuite/commit/536ad7e9b0bf9c727dd69c5e0584033751422e1f))
* **DateRangePicker:** fix error state when value is empty array ([#3631](https://github.com/rsuite/rsuite/issues/3631)) ([f8778f5](https://github.com/rsuite/rsuite/commit/f8778f537c441e0a49ecebf2c41c9af14a764400))
* **InputGroup:** fix Input padding issue in InputGroup ([#3600](https://github.com/rsuite/rsuite/issues/3600)) ([56b3792](https://github.com/rsuite/rsuite/commit/56b379297e237aa26aff0140cd93ec3a7314e5f4))
* **TagPicker:** fix the margin issue between tags in plaintext mode ([#3638](https://github.com/rsuite/rsuite/issues/3638)) ([61f343b](https://github.com/rsuite/rsuite/commit/61f343b43677b9d1441f5c5a60cc7a95ae6890ca))
* fixed issue with install guide page ([#3619](https://github.com/rsuite/rsuite/issues/3619)) ([#3620](https://github.com/rsuite/rsuite/issues/3620)) ([33159b6](https://github.com/rsuite/rsuite/commit/33159b6ffeff4ce44cae03e1eb9ae806c6d2d12c))


### Features

* **InlineEdit:** add support for InlineEdit ([#3614](https://github.com/rsuite/rsuite/issues/3614)) ([8ed7e6d](https://github.com/rsuite/rsuite/commit/8ed7e6d57b7ccd930bd72017a0a8299be0c21515))



## [5.53.2](https://github.com/rsuite/rsuite/compare/v5.53.1...v5.53.2) (2024-02-06)


### Bug Fixes

* **CheckPicker:** remove debug script ([#3615](https://github.com/rsuite/rsuite/issues/3615)) ([62285da](https://github.com/rsuite/rsuite/commit/62285da3f238dceeb2f75c168cc07bbacf0a52ce))
* **Tree,CheckTree:** fix `classPrefix` and `className` not working correctly ([#3616](https://github.com/rsuite/rsuite/issues/3616)) ([c82cb91](https://github.com/rsuite/rsuite/commit/c82cb919a12be2bd94e7bf1018e3f3c8aa522c1f))



## [5.53.1](https://github.com/rsuite/rsuite/compare/v5.53.0...v5.53.1) (2024-02-06)


### Bug Fixes

* supports Fragment children component ([#3607](https://github.com/rsuite/rsuite/issues/3607)) ([299b951](https://github.com/rsuite/rsuite/commit/299b951644ce6564bd53f6d0a4d031180d9e4e9d))
* **Panel:** fix uncontrolled re-rendering of Panel children ([#3610](https://github.com/rsuite/rsuite/issues/3610)) ([8f9a8a8](https://github.com/rsuite/rsuite/commit/8f9a8a831156ac1eeee50b8093bce9ed89cf043d))



# [5.53.0](https://github.com/rsuite/rsuite/compare/v5.52.0...v5.53.0) (2024-02-02)

### Bug Fixes

- **DateRangePicker:** fix incorrect static method type definition ([#3598](https://github.com/rsuite/rsuite/issues/3598)) ([68b3afb](https://github.com/rsuite/rsuite/commit/68b3afb712535632435ea8d2a2a6c7581ab7f8e7))
- **InputGroup:** fix that the bg color of `InputGroup.Addon` is inconsistent with `Input` ([#3595](https://github.com/rsuite/rsuite/issues/3595)) ([a6bb6b0](https://github.com/rsuite/rsuite/commit/a6bb6b082fea563515d53979e8ba6b9183f2af89))
- **Menu:** fix the menuitem cannot be closed correctly when it contains child elements ([#3599](https://github.com/rsuite/rsuite/issues/3599)) ([5f08313](https://github.com/rsuite/rsuite/commit/5f08313e8fded19ea0d918c95f1cb6a84101760d))
- **Message:** make the visual style of Message more prominent ([#3603](https://github.com/rsuite/rsuite/issues/3603)) ([114013f](https://github.com/rsuite/rsuite/commit/114013ff6b7922f72e383f3b7d51a5938a1e4313))
- **tree:** improve the hover and focus status of Tree nodes ([#3594](https://github.com/rsuite/rsuite/issues/3594)) ([559b837](https://github.com/rsuite/rsuite/commit/559b83731e3e46b09efe6cfcf6bb4d78e8cc0038))

### Features

- **Message:** add support for `bordered` and `centered` props on Message ([#3605](https://github.com/rsuite/rsuite/issues/3605)) ([2e0f2ec](https://github.com/rsuite/rsuite/commit/2e0f2ec620bce242709acbeea0bff060abc848b4))
- **Tabs:** add support for Tabs ([#3597](https://github.com/rsuite/rsuite/issues/3597)) ([303350f](https://github.com/rsuite/rsuite/commit/303350fb3dd4abc20961a72b356132a1d5188685))

# [5.52.0](https://github.com/rsuite/rsuite/compare/v5.51.0...v5.52.0) (2024-01-26)

### Bug Fixes

- **DatePicker:** fix DatePicker can't select after typing with keyboard ([#3589](https://github.com/rsuite/rsuite/issues/3589)) ([d70d883](https://github.com/rsuite/rsuite/commit/d70d88342b44461940e768f82df04ea5549f0f4a))
- **pickers:** fix the spacing of the searchbox is not uniform in all pickers ([#3565](https://github.com/rsuite/rsuite/issues/3565)) ([4c90a03](https://github.com/rsuite/rsuite/commit/4c90a03e79f34af0ec12730362c844e1ad0bd89d))
- **useUniqueId:** use toString instead of an empty string ([#3591](https://github.com/rsuite/rsuite/issues/3591)) ([d80914c](https://github.com/rsuite/rsuite/commit/d80914c5635d2b9b41d09258266249e52a6b7a90))
- NavItem and DropDownItem rendering icon without overriding className ([#3561](https://github.com/rsuite/rsuite/issues/3561)) ([6a8e81f](https://github.com/rsuite/rsuite/commit/6a8e81fb2aa38433e88a5d11835357808bb772d8))

### Features

- **Accordion:** add support for Accordion ([#3575](https://github.com/rsuite/rsuite/issues/3575)) ([1c81777](https://github.com/rsuite/rsuite/commit/1c817770db4e9d2e0ca9de0110c2537e7e677ae7))
- **CSS:** export individual CSS files for all components ([#3588](https://github.com/rsuite/rsuite/issues/3588)) ([616deff](https://github.com/rsuite/rsuite/commit/616deff9e44125e89fec10fdecabe1c3cbc8837b))
- **DateRangePicker:** add support for `showHeader` on DateRangePicker ([#3590](https://github.com/rsuite/rsuite/issues/3590)) ([1203c34](https://github.com/rsuite/rsuite/commit/1203c34e3420388cc534547c06433b8b58bc0405))
- **storybook:** add storybook examples for all components ([#3585](https://github.com/rsuite/rsuite/issues/3585)) ([48df8a9](https://github.com/rsuite/rsuite/commit/48df8a9fa081cfa08c7b97d35dae4757796e5872))
- **VisuallyHidden:** add support for VisuallyHidden ([#3571](https://github.com/rsuite/rsuite/issues/3571)) ([43544a0](https://github.com/rsuite/rsuite/commit/43544a075c79196159711405c1f696fb3a2a6625))

# [5.51.0](https://github.com/rsuite/rsuite/compare/v5.50.0...v5.51.0) (2024-01-19)

### Bug Fixes

- **InputGroup:** fix style conflict caused by zIndex set in InputGoup ([#3552](https://github.com/rsuite/rsuite/issues/3552)) ([f874edf](https://github.com/rsuite/rsuite/commit/f874edfdbf0dbc9a53e4fe26fb9cf39108f1a00c))

### Features

- **Form:** add support for `nestedField` prop on Form ([#3568](https://github.com/rsuite/rsuite/issues/3568)) ([47fce55](https://github.com/rsuite/rsuite/commit/47fce559b159f128fd2f89ffc36c0e9bcfd3f25b))
- improve accessibility of all pickers ([#3558](https://github.com/rsuite/rsuite/issues/3558)) ([8ad3cfd](https://github.com/rsuite/rsuite/commit/8ad3cfd4f1a2de16b52fec2bed5e4a9ea509f824))

# [5.50.0](https://github.com/rsuite/rsuite/compare/v5.49.0...v5.50.0) (2024-01-12)

### Bug Fixes

- typo in Next.js guide ([#3555](https://github.com/rsuite/rsuite/issues/3555)) ([77d60cf](https://github.com/rsuite/rsuite/commit/77d60cfeb27e3e52b4003d72114e5164b275a3d2))

### Features

- **cra:** supports using CRA to install javascript template ([#3538](https://github.com/rsuite/rsuite/issues/3538)) ([1b697f4](https://github.com/rsuite/rsuite/commit/1b697f4a4f61a7943351c5ca0f46a484c9ea1ac6))
- **cra:** supports using CRA to install typescript template ([#3540](https://github.com/rsuite/rsuite/issues/3540)) ([bbe3609](https://github.com/rsuite/rsuite/commit/bbe3609d4492e9186e32309f6c6ee6101d5eb83c))
- **DateRangePicker:** supports date selection by using keyboard ([#3554](https://github.com/rsuite/rsuite/issues/3554)) ([2c8d197](https://github.com/rsuite/rsuite/commit/2c8d1974e018903b3a1b874566b31c751d207493))
- **FormControl:** added support for `name` setting path of object ([#3511](https://github.com/rsuite/rsuite/issues/3511)) ([03d5396](https://github.com/rsuite/rsuite/commit/03d5396b8a23d88907be9d1864776d61a0a3b963))

# [5.49.0](https://github.com/rsuite/rsuite/compare/v5.48.1...v5.49.0) (2023-12-29)

### Bug Fixes

- **CSS Reset:** fix `rsuite-no-reset.css` overrides the default styles of the app ([#3527](https://github.com/rsuite/rsuite/issues/3527)) ([dff5804](https://github.com/rsuite/rsuite/commit/dff5804f81c00dfe4f4bb02eac92e070fabcc4f8))
- **CustomProvider:** fix the flicker when initializing in Dark mode ([#3528](https://github.com/rsuite/rsuite/issues/3528)) ([2bd67fd](https://github.com/rsuite/rsuite/commit/2bd67fd60ddaec9a5925d22e7cee126425b6ad78))
- **DateRangePicker:** fix layout misalignment due to missing min-width ([#3523](https://github.com/rsuite/rsuite/issues/3523)) ([464af79](https://github.com/rsuite/rsuite/commit/464af7964fe5fb8e434c7113084e6597726f3db6))

### Features

- **DatePicker:** supports date selection by using keyboard ([#3515](https://github.com/rsuite/rsuite/issues/3515)) ([bc56cb3](https://github.com/rsuite/rsuite/commit/bc56cb33fb15854a0d3f6c3c3bb6ee3b4036aef5))
- **DateRangeInput:** add support for DateRangeInput ([#3525](https://github.com/rsuite/rsuite/issues/3525)) ([074245a](https://github.com/rsuite/rsuite/commit/074245a2f5f18028426d896584690d1738606d1c))
- **Input:** add support for htmlSize prop ([#3526](https://github.com/rsuite/rsuite/issues/3526)) ([62de8ca](https://github.com/rsuite/rsuite/commit/62de8ca14eb2aaf8dde904b3667035cb3f060c23))

## [5.48.1](https://github.com/rsuite/rsuite/compare/v5.48.0...v5.48.1) (2023-12-22)

### Bug Fixes

- **build:** fix environment variable undefined error when building ([#3521](https://github.com/rsuite/rsuite/issues/3521)) ([8efa27b](https://github.com/rsuite/rsuite/commit/8efa27b69233d4cd72a4b09dbbd080b15db7d1c0))
- **DatePicker:** fix `menuStyle` prop not working ([#3509](https://github.com/rsuite/rsuite/issues/3509)) ([aa816be](https://github.com/rsuite/rsuite/commit/aa816be89573f8483335736b67365a0b13848ecf))
- **useMediaQuery:** fix MediaQueryList not updating status when triggering change event ([#3503](https://github.com/rsuite/rsuite/issues/3503)) ([06b79dd](https://github.com/rsuite/rsuite/commit/06b79dda26ced54b070cda3fd6d70f96a7a7e373))

# [5.48.0](https://github.com/rsuite/rsuite/compare/v5.47.0...v5.48.0) (2023-12-14)

### Bug Fixes

- **Whisper:** fix delay and other related props not working ([#3499](https://github.com/rsuite/rsuite/issues/3499)) ([a54aee1](https://github.com/rsuite/rsuite/commit/a54aee1f37e05fcf4618077a9a59165051de2a5a))

### Features

- **DateInput:** add support for DateInput ([#3492](https://github.com/rsuite/rsuite/issues/3492)) ([3095c03](https://github.com/rsuite/rsuite/commit/3095c037090b8366f39a98e9b275cd732e4dd069))
- **useMediaQuery:** add a CSS media query hook ([#3234](https://github.com/rsuite/rsuite/issues/3234)) ([d2bfdd6](https://github.com/rsuite/rsuite/commit/d2bfdd661a0f6c75de3906dc6fba3d8f41176551))
- add annotations and link for components using JSDoc format ([#3498](https://github.com/rsuite/rsuite/issues/3498)) ([39d4e5f](https://github.com/rsuite/rsuite/commit/39d4e5ff8491472fa3ef93bb0af9f14ec6ca6037))

# [5.47.0](https://github.com/rsuite/rsuite/compare/v5.46.1...v5.47.0) (2023-12-08)

### Bug Fixes

- **CloseButton:** fix close label translation string ([#3483](https://github.com/rsuite/rsuite/issues/3483)) ([feedbde](https://github.com/rsuite/rsuite/commit/feedbde550d96d207d6be690b89c3d12247b87d9))
- **CloseButton:** improve CloseButton accessibility ([#3488](https://github.com/rsuite/rsuite/issues/3488)) ([92ed9a5](https://github.com/rsuite/rsuite/commit/92ed9a5080e241f7e4057cbbc6e971240fb464fe))

### Features

- **TagPicker:** add support for renderMenuItemCheckbox ([#3481](https://github.com/rsuite/rsuite/issues/3481)) ([6b044e9](https://github.com/rsuite/rsuite/commit/6b044e9621db421ea75dc549da27d63493a91261))

## [5.46.1](https://github.com/rsuite/rsuite/compare/v5.46.0...v5.46.1) (2023-12-01)

### Bug Fixes

- **Calendar:** fix incorrect week numbers calculation ([#3471](https://github.com/rsuite/rsuite/issues/3471)) ([646e728](https://github.com/rsuite/rsuite/commit/646e72874595ee7c0a8d8596175c974ff67e146a))
- **CSS:** fix CSS calc syntax compatibility issue ([#3474](https://github.com/rsuite/rsuite/issues/3474)) ([88021ee](https://github.com/rsuite/rsuite/commit/88021eeaa0f7e720f6511616c0e2413570700159))
- **Slider,RangeSlider:** fix onChangeCommitted not triggered when the… ([#3472](https://github.com/rsuite/rsuite/issues/3472)) ([18a6e17](https://github.com/rsuite/rsuite/commit/18a6e17417bcb516701340b335c10ee3c7efa15a))

# [5.46.0](https://github.com/rsuite/rsuite/compare/v5.45.0...v5.46.0) (2023-11-24)

### Bug Fixes

- **DatePicker:** improve DatePicker accessibility ([#3464](https://github.com/rsuite/rsuite/issues/3464)) ([63ac804](https://github.com/rsuite/rsuite/commit/63ac8048d9ed7ab3048d9b488a5a1ce306ea2f6d))
- improve accessibility of picker related components ([#3463](https://github.com/rsuite/rsuite/issues/3463)) ([1cc5481](https://github.com/rsuite/rsuite/commit/1cc54812957b096273e0fa503b365da3c5eeba11))
- **AutoComplete,Loader:** fix CSS relative colors causing test errors ([#3460](https://github.com/rsuite/rsuite/issues/3460)) ([f9b1244](https://github.com/rsuite/rsuite/commit/f9b124489d6c505d10b9c8a0324b5046022aef27))
- **Cascader:** fix bug in value selection via Enter key ([#3461](https://github.com/rsuite/rsuite/issues/3461)) ([4266e79](https://github.com/rsuite/rsuite/commit/4266e79928ce75a4e856b68003510d1d12ee4b70))

### Features

- **CSS:** add compatibility for relative color syntax ([#3462](https://github.com/rsuite/rsuite/issues/3462)) ([a02eaa9](https://github.com/rsuite/rsuite/commit/a02eaa9b14dc374d503481a443051d413a9fd041))

# [5.45.0](https://github.com/rsuite/rsuite/compare/v5.44.0...v5.45.0) (2023-11-17)

### Bug Fixes

- **Button:** fix button radius using wrong less variable ([#3451](https://github.com/rsuite/rsuite/issues/3451)) ([037a2b3](https://github.com/rsuite/rsuite/commit/037a2b3fb2696a55390018958a3d84cd0dc38958))
- formControll will pass undefined as value when value is null defaultValue is undefined ([#3456](https://github.com/rsuite/rsuite/issues/3456)) ([cde5a88](https://github.com/rsuite/rsuite/commit/cde5a889036f1873115b8be2ac31a31b8ff28bd3))

### Features

- **Drawer:** add support for closeButton ([#3450](https://github.com/rsuite/rsuite/issues/3450)) ([90f25d0](https://github.com/rsuite/rsuite/commit/90f25d09e131e606c9ebd6dca41c0047e02f7908))
- **Modal,Drawer:** size prop supports number and string values ([#3103](https://github.com/rsuite/rsuite/issues/3103)) ([39741b7](https://github.com/rsuite/rsuite/commit/39741b755460e29cb8cfefb32bf4056b14cbf985))

# [5.44.0](https://github.com/rsuite/rsuite/compare/5.43.0...5.44.0) (2023-11-10)

### Bug Fixes

- **DatePicker,DateRangePicker:** fix inability to clear values via Backspace key ([#3446](https://github.com/rsuite/rsuite/issues/3446)) ([ca7dcdd](https://github.com/rsuite/rsuite/commit/ca7dcddb1406b8d6a20ff4ad11755fbac83be07e))
- **toaster:** fix useToaster not keep same reference when re-renders ([#3440](https://github.com/rsuite/rsuite/issues/3440)) ([a603033](https://github.com/rsuite/rsuite/commit/a603033eeb0a1de2299938c506fb42ee13375f2c))

### Features

- add loading prop for all pickers ([#3444](https://github.com/rsuite/rsuite/issues/3444)) ([3c5b2af](https://github.com/rsuite/rsuite/commit/3c5b2af3658bb44c8eb22f1c59f8a9c989c7e62e))
- **DatePicker,DateRangePicker:** add support for onShortcutClick ([#3439](https://github.com/rsuite/rsuite/issues/3439)) ([ae00f90](https://github.com/rsuite/rsuite/commit/ae00f9045fd7dba95739f1f3fc8a21d671b6875b))

# [5.43.0](https://github.com/rsuite/rsuite/compare/5.42.0...5.43.0) (2023-11-03)

### Bug Fixes

- **AutoComplete:** fix AutoComplete plaintext mode not working ([#3436](https://github.com/rsuite/rsuite/issues/3436)) ([72b79e7](https://github.com/rsuite/rsuite/commit/72b79e7b6dfb90ec23bb81b1145db125f8b827cd))
- **Drawer:** change Drawer title font-size to 18px ([#3430](https://github.com/rsuite/rsuite/issues/3430)) ([3eff439](https://github.com/rsuite/rsuite/commit/3eff439a0fa28e5349e306b6b2ded8eb9e847f95))

### Features

- **CSS:** use CSS custom properties instead of less variables ([#3428](https://github.com/rsuite/rsuite/issues/3428)) ([f6474e4](https://github.com/rsuite/rsuite/commit/f6474e490036cd8faf228332e2b7bd6b85902671))

# [5.42.0](https://github.com/rsuite/rsuite/compare/v5.41.0...v5.42.0) (2023-10-29)

### Bug Fixes

- **form:** form doesn't pass correct formValue to context ([#3426](https://github.com/rsuite/rsuite/issues/3426)) ([0ade0dc](https://github.com/rsuite/rsuite/commit/0ade0dc60e25857120eb38047cec1c7e78f8df11))

### Features

- **TagPicker,TagInput:** add support for onTagRemove ([#3413](https://github.com/rsuite/rsuite/issues/3413)) ([96f96ab](https://github.com/rsuite/rsuite/commit/96f96abc974fb8b0200c0cc715275fcdcaee3736))

# [5.41.0](https://github.com/rsuite/rsuite/compare/v5.38.0...v5.41.0) (2023-10-20)

### Bug Fixes

- add a safety check for the deprecated findDOMNode ([#3362](https://github.com/rsuite/rsuite/issues/3362)) ([a20d77e](https://github.com/rsuite/rsuite/commit/a20d77e0a11f00eb2ca3d541d5f8150cfa3e675d))
- **InputGroup:** fix child element's event not firing after InputGroup is disabled ([#3398](https://github.com/rsuite/rsuite/issues/3398)) ([3170408](https://github.com/rsuite/rsuite/commit/3170408f54eba3b0369e9615d471d049b06b75b4))
- **Modal,Drawer:** fix Modal and Drawer being automatically closed when clicked ([#3400](https://github.com/rsuite/rsuite/issues/3400)) ([b4c6222](https://github.com/rsuite/rsuite/commit/b4c622244ecd2c3f6866278e3fcd6a90707fd8a9))
- **Navbar:** fix background color of the subtle navigation items incorrect ([#3392](https://github.com/rsuite/rsuite/issues/3392)) ([e49e3e7](https://github.com/rsuite/rsuite/commit/e49e3e763691e131954a5dff3c59280c85e83974))
- **OverlayTrigger:** fix Overlay should not be open when cursor is not on element ([#3401](https://github.com/rsuite/rsuite/issues/3401)) ([4a340f3](https://github.com/rsuite/rsuite/commit/4a340f357b04825a4a1300c2050613baefcddf52))
- Typo in docs ([#3368](https://github.com/rsuite/rsuite/issues/3368)) ([dee34c7](https://github.com/rsuite/rsuite/commit/dee34c7e29abbe47fa3d81ab0535a27d5a089afc))

### Features

- add a script to prepend the use client directive ([#3407](https://github.com/rsuite/rsuite/issues/3407)) ([3812779](https://github.com/rsuite/rsuite/commit/38127797adb6d2409d7978df84039a5121f49629))
- **Button,Nav:** improved font color contrast in subtle appearance ([#3391](https://github.com/rsuite/rsuite/issues/3391)) ([266846a](https://github.com/rsuite/rsuite/commit/266846ac5cdeeb5a24e685da29a49460ea21ea92))

### Reverts

- Revert "refactor(SelectPicker): move grouped options into group element (#3313)" (#3389) ([8b327e3](https://github.com/rsuite/rsuite/commit/8b327e371afbac9f6eb431191900a2ddcaa66ce1)), closes [#3313](https://github.com/rsuite/rsuite/issues/3313) [#3389](https://github.com/rsuite/rsuite/issues/3389)

# [5.40.0](https://github.com/rsuite/rsuite/compare/v5.39.0...v5.40.0) (2023-09-10)

### Bug Fixes

- **CheckTree:** searchKeyword is not updated as expected ([#3354](https://github.com/rsuite/rsuite/issues/3354)) ([b642da3](https://github.com/rsuite/rsuite/commit/b642da31c158481eeea8d46e9e3088edfb83acd1)), closes [#3196](https://github.com/rsuite/rsuite/issues/3196)

# [5.39.0](https://github.com/rsuite/rsuite/compare/v5.38.0...v5.39.0) (2023-09-04)

### Bug Fixes

- **Nav.Item:** fix vertical mis-alignment of icon ([#3344](https://github.com/rsuite/rsuite/issues/3344)) ([283c013](https://github.com/rsuite/rsuite/commit/283c013b656e19f12ec9b628af83fb1798bc5086))

### Features

- **i18n:** Create ne_NP.ts for Nepali Locale Support. ([#3351](https://github.com/rsuite/rsuite/issues/3351)) ([4b16982](https://github.com/rsuite/rsuite/commit/4b16982b5ac5cec06d9eb707b1ba37ae616cf19f))

### Reverts

- Revert "ci: run ci check on \*.x branches" ([0a98b0c](https://github.com/rsuite/rsuite/commit/0a98b0c765270923f321f1d859ccebbf7adeed37))

# [5.38.0](https://github.com/rsuite/rsuite/compare/v5.37.4...v5.38.0) (2023-08-18)

### Bug Fixes

- **Calendar:** fix onMonthChange not fired when clicking on dates ([#3335](https://github.com/rsuite/rsuite/issues/3335)) ([035d287](https://github.com/rsuite/rsuite/commit/035d287c0f998e1f1aeed62dca7d2cfeded46167))
- **InputPicker:** cursor should be text ([#3334](https://github.com/rsuite/rsuite/issues/3334)) ([eed2337](https://github.com/rsuite/rsuite/commit/eed2337546665878c51cf3d88d0801c8a37a908d))

### Features

- **Calendar:** add cellClassName prop ([#3336](https://github.com/rsuite/rsuite/issues/3336)) ([cb7c2ae](https://github.com/rsuite/rsuite/commit/cb7c2aee30985219cb0d29155a3ae3d2f739d1d2)), closes [#3333](https://github.com/rsuite/rsuite/issues/3333)

## [5.37.4](https://github.com/rsuite/rsuite/compare/v5.37.3...v5.37.4) (2023-08-11)

### Bug Fixes

- **DatePicker,DateRangePicker:** fix calendar styles per design ([#3325](https://github.com/rsuite/rsuite/issues/3325)) ([a7d1c08](https://github.com/rsuite/rsuite/commit/a7d1c08c44c6169bcd10b32dcb4bb9ebcbb93677))
- **InputGroup:** fix inside addon overlapping input text ([#3324](https://github.com/rsuite/rsuite/issues/3324)) ([8f1ff30](https://github.com/rsuite/rsuite/commit/8f1ff30634dbfcd20f05b63168e767723af5a968))
- **InputPicker:** Fix InputPicker select bug ([#3329](https://github.com/rsuite/rsuite/issues/3329)) ([c52756b](https://github.com/rsuite/rsuite/commit/c52756b8596c20d275a9d5d2d41b7a81d355920f))
- **OverlayTrigger:** fix handleClose will trigger twice ([#3286](https://github.com/rsuite/rsuite/issues/3286)) ([11b8eb8](https://github.com/rsuite/rsuite/commit/11b8eb8c6f43b46dcad5d1f800e6eb7a5374b0c2))
- **Picker:** change color of caret on option group title ([#3323](https://github.com/rsuite/rsuite/issues/3323)) ([0d7be85](https://github.com/rsuite/rsuite/commit/0d7be85eec97063b162877ff8169209070fb1d4a))

## [5.37.3](https://github.com/rsuite/rsuite/compare/v5.37.2...v5.37.3) (2023-08-02)

### Bug Fixes

- **SelectPicker:** fix display options not updating when data prop is updated ([#3319](https://github.com/rsuite/rsuite/issues/3319)) ([06c9cce](https://github.com/rsuite/rsuite/commit/06c9cce64ea27a756f87aa74a0af0287afdf106a))

## [5.37.2](https://github.com/rsuite/rsuite/compare/v5.37.1...v5.37.2) (2023-07-28)

### Bug Fixes

- **CheckPicker:** wrong padding of grouped options ([#3306](https://github.com/rsuite/rsuite/issues/3306)) ([03ca6bf](https://github.com/rsuite/rsuite/commit/03ca6bff626146d44b1dd9ca1f931a984ad3103a))
- **Overlay:** type error on OverlayTriggerProps ([#3307](https://github.com/rsuite/rsuite/issues/3307)) ([4a2e28e](https://github.com/rsuite/rsuite/commit/4a2e28e2412a6ffebcb9ad03a99a808f4d9ee3ee))
- **RadioGroup:** unexpected wrapped text in picker appearance ([#3303](https://github.com/rsuite/rsuite/issues/3303)) ([c5aa81a](https://github.com/rsuite/rsuite/commit/c5aa81affab3333e6a29189d69c071d9208fbba8))

## [5.37.1](https://github.com/rsuite/rsuite/compare/v5.37.0...v5.37.1) (2023-07-21)

### Bug Fixes

- **SelectPicker:** wrong padding for grouped options ([#3298](https://github.com/rsuite/rsuite/issues/3298)) ([e929f74](https://github.com/rsuite/rsuite/commit/e929f74273092855503f306f2e7e3362c716e574))

# [5.37.0](https://github.com/rsuite/rsuite/compare/v5.36.0...v5.37.0) (2023-07-07)

### Bug Fixes

- **Picker:** pass name prop to underlying input element ([#3275](https://github.com/rsuite/rsuite/issues/3275)) ([3b7cce5](https://github.com/rsuite/rsuite/commit/3b7cce56b90de2502b1f997ae0ff74918fcee718))
- **RadioGroup:** fix style in picker appearance ([#3274](https://github.com/rsuite/rsuite/issues/3274)) ([f673c85](https://github.com/rsuite/rsuite/commit/f673c85963973d2bbd9fc72c461d3a9718b3f25a))
- **Uploader:** correct type for status argument of onError callback ([#3273](https://github.com/rsuite/rsuite/issues/3273)) ([cdb3c74](https://github.com/rsuite/rsuite/commit/cdb3c7412e793c1d89958ea6fddabbf91d326575))

### Features

- **InputPicker:** add shouldDisplayCreateOption prop ([#3270](https://github.com/rsuite/rsuite/issues/3270)) ([aa52b69](https://github.com/rsuite/rsuite/commit/aa52b690b4aa57918b12fc5a9684d7a59cef4f34))

# [5.36.0](https://github.com/rsuite/rsuite/compare/v5.35.1...v5.36.0) (2023-06-30)

### Bug Fixes

- **TagInput:** fix tag create during text composing ([#3244](https://github.com/rsuite/rsuite/issues/3244)) ([86451d7](https://github.com/rsuite/rsuite/commit/86451d73e611c6fb1f21e2f57b9ad9757430f219))

### Features

- added Japanese locale (ja_JP) ([#3254](https://github.com/rsuite/rsuite/issues/3254)) ([45ea93b](https://github.com/rsuite/rsuite/commit/45ea93bbd0014e88914ca1d2abf5edc2aec0586f))

## [5.35.1](https://github.com/rsuite/rsuite/compare/v5.35.0...v5.35.1) (2023-06-09)

### Bug Fixes

- **docs:** wrong menuToggle style in RTL direction ([#3223](https://github.com/rsuite/rsuite/issues/3223)) ([38313a9](https://github.com/rsuite/rsuite/commit/38313a9438984c9da8ef4f7f1c10678500fc11db))
- **TreePicker:** fix tree node disabled still can interact ([#3232](https://github.com/rsuite/rsuite/issues/3232)) ([a57b058](https://github.com/rsuite/rsuite/commit/a57b058ba422caf612d5ffc1fd636101c62b605e))

# [5.35.0](https://github.com/rsuite/rsuite/compare/v5.34.1...v5.35.0) (2023-06-02)

### Features

- **RadioTile:** add support for RadioTile ([#3208](https://github.com/rsuite/rsuite/issues/3208)) ([5cac8e1](https://github.com/rsuite/rsuite/commit/5cac8e12cdef95bc6a6de1333d5cb43ee02f1ab7))

## [5.34.1](https://github.com/rsuite/rsuite/compare/v5.34.0...v5.34.1) (2023-05-26)

### Bug Fixes

- **InputPicker:** add missing top padding of listbox ([#3214](https://github.com/rsuite/rsuite/issues/3214)) ([f6df23c](https://github.com/rsuite/rsuite/commit/f6df23c085c4d7944c5817b0a9f8a1168c41f0b9))
- **Radio,Checkbox:** remove leading space for Radio/Checkbox in groups ([#3215](https://github.com/rsuite/rsuite/issues/3215)) ([27c1495](https://github.com/rsuite/rsuite/commit/27c14952da87c21612a8e822295eefc0908b08d6))

# [5.34.0](https://github.com/rsuite/rsuite/compare/v5.33.1...v5.34.0) (2023-05-19)

### Bug Fixes

- **DatePicker:** added stack styles to datepicker styles ([#3195](https://github.com/rsuite/rsuite/issues/3195)) ([b3ed580](https://github.com/rsuite/rsuite/commit/b3ed580867db2e5205e71475c593e7d17ff04b49))
- **SelectPicker:** prevent error when listProps.itemSize is a number ([#3193](https://github.com/rsuite/rsuite/issues/3193)) ([151df47](https://github.com/rsuite/rsuite/commit/151df474b15ab4651d4ee5777b66018e58837816))

### Features

- **Timeline:** add isItemActive prop ([#3198](https://github.com/rsuite/rsuite/issues/3198)) ([377930f](https://github.com/rsuite/rsuite/commit/377930f3498c59834a424417c136499866aacec2))

## [5.33.1](https://github.com/rsuite/rsuite/compare/v5.33.0...v5.33.1) (2023-05-12)

### Bug Fixes

- **Carousel:** fix index not being reset when children change ([#3185](https://github.com/rsuite/rsuite/issues/3185)) ([3afb746](https://github.com/rsuite/rsuite/commit/3afb7460f5d12b34eb0e7944fa9f5a461b663028))
- **CheckPicker:** avoid mutating data when groupBy is specified ([#3173](https://github.com/rsuite/rsuite/issues/3173)) ([1a9805a](https://github.com/rsuite/rsuite/commit/1a9805a00cffcb8e527fbeb1df3a346da9a707f0))
- **DatePicker:** fix defaultValue not changing month on calendar ([#3183](https://github.com/rsuite/rsuite/issues/3183)) ([b0a2b5f](https://github.com/rsuite/rsuite/commit/b0a2b5f5cfe6ea94c1c13f8e9451c5d60f7f5b80))
- **pickers:** fix keyboard events still responding when readOnly ([#3184](https://github.com/rsuite/rsuite/issues/3184)) ([56e7563](https://github.com/rsuite/rsuite/commit/56e7563b2035be767f5ed8429cd8c3622708abe8))

# [5.33.0](https://github.com/rsuite/rsuite/compare/v5.32.0...v5.33.0) (2023-04-28)

### Features

- **Tree,TreePicker,CheckTree,CheckTreePicker:** add onSelectItem prop ([#3172](https://github.com/rsuite/rsuite/issues/3172)) ([9a5618a](https://github.com/rsuite/rsuite/commit/9a5618a3affb13e70330a5aea253e8b54c67b61b))

# [5.32.0](https://github.com/rsuite/rsuite/compare/v5.31.1...v5.32.0) (2023-04-21)

### Bug Fixes

- **build:** fix broken lodash currying in CDN bundles ([#3159](https://github.com/rsuite/rsuite/issues/3159)) ([896a9d5](https://github.com/rsuite/rsuite/commit/896a9d53cf2c1e0140e43eea024c4f0361c04328))
- **Cascader:** avoid mutating data prop ([#3157](https://github.com/rsuite/rsuite/issues/3157)) ([6d13318](https://github.com/rsuite/rsuite/commit/6d133185ea1c65b47b35da61499d5cff77dde122))

### Features

- **DateRangePicker:** add `limitStartYear` prop ([#3163](https://github.com/rsuite/rsuite/issues/3163)) ([fd27df2](https://github.com/rsuite/rsuite/commit/fd27df21e1c36372ea8b444f79521c901a65780c))

## [5.31.1](https://github.com/rsuite/rsuite/compare/v5.31.0...v5.31.1) (2023-04-14)

### Bug Fixes

- **Calendar:** fix style errors that are not as designed ([#3146](https://github.com/rsuite/rsuite/issues/3146)) ([f3fe484](https://github.com/rsuite/rsuite/commit/f3fe484a8f63e877c517061e5911116d3107b68b))
- **i18n:** update ru_RU locale ([#3153](https://github.com/rsuite/rsuite/issues/3153)) ([5c626a9](https://github.com/rsuite/rsuite/commit/5c626a99ca70d9e30836b02f81b90a37f5f2de2d))
- **Toggle:** fix spinner size in sm/lg Toggles ([#3156](https://github.com/rsuite/rsuite/issues/3156)) ([896ee49](https://github.com/rsuite/rsuite/commit/896ee492bbdd2277dbe23f6667305ceaf9154a8a))

# [5.31.0](https://github.com/rsuite/rsuite/compare/v5.30.0...v5.31.0) (2023-04-07)

### Bug Fixes

- **toaster:** fix style when message at the left ([#3138](https://github.com/rsuite/rsuite/issues/3138)) ([6084c2a](https://github.com/rsuite/rsuite/commit/6084c2a35cdd32db1e9a4ec560e9bfaadb7a173c))

### Features

- **Calendar:** add support for `onMonthChange` on `<Calendar>` ([#3150](https://github.com/rsuite/rsuite/issues/3150)) ([8dfe9d6](https://github.com/rsuite/rsuite/commit/8dfe9d6da95a55277d78f712b1d91ea56a70b9bb))

# [5.30.0](https://github.com/rsuite/rsuite/compare/v5.29.0...v5.30.0) (2023-03-31)

### Bug Fixes

- **Cascader:** fix infinite load state on inline mode and fix typo ([#3131](https://github.com/rsuite/rsuite/issues/3131)) ([faa05f0](https://github.com/rsuite/rsuite/commit/faa05f03df1ab890f0bcf13ebd173e52129400df))
- **DatePicker:** fix abnormal time display in the calendar header ([#3136](https://github.com/rsuite/rsuite/issues/3136)) ([860df1a](https://github.com/rsuite/rsuite/commit/860df1a7bd03b40371ac6891e45f3295b9edc72f))
- **DateRangePicker:** fix the error of invalid time during date selection ([#3135](https://github.com/rsuite/rsuite/issues/3135)) ([adeafdc](https://github.com/rsuite/rsuite/commit/adeafdc44162fd2ef9e2470094a52cb17b5cddb3))

# [5.29.0](https://github.com/rsuite/rsuite/compare/v5.28.3...v5.29.0) (2023-03-24)

### Bug Fixes

- **Affix:** fix misalignment due to DOM content updates ([#3124](https://github.com/rsuite/rsuite/issues/3124)) ([76d21e9](https://github.com/rsuite/rsuite/commit/76d21e9e950da8c2df52d1fbc96abcada633d908))
- **Picker:** fix async container update cause offset error ([#3126](https://github.com/rsuite/rsuite/issues/3126)) ([c3e15c5](https://github.com/rsuite/rsuite/commit/c3e15c512319b0240236e35a5b28432bea1d25f3))

## [5.28.3](https://github.com/rsuite/rsuite/compare/v5.28.2...v5.28.3) (2023-03-17)

### Bug Fixes

- **AutoComplete:** add missing autoComplete prop ([#3108](https://github.com/rsuite/rsuite/issues/3108)) ([c855fab](https://github.com/rsuite/rsuite/commit/c855fab4488c6545ad567166007a6f6650db2849))
- **Form.Control:** fix not able to override checked prop ([#3120](https://github.com/rsuite/rsuite/issues/3120)) ([aac965e](https://github.com/rsuite/rsuite/commit/aac965e1fdc80bf67885c609021fa8e01b2f3576))

## [5.28.2](https://github.com/rsuite/rsuite/compare/v5.28.1...v5.28.2) (2023-03-10)

### Bug Fixes

- **AutoComplete:** fix readOnly not work ([#3107](https://github.com/rsuite/rsuite/issues/3107)) ([493bbdc](https://github.com/rsuite/rsuite/commit/493bbdcd4fcfbe271bc98108f3831f18ffda9353))

## [5.28.1](https://github.com/rsuite/rsuite/compare/v5.28.0...v5.28.1) (2023-03-03)

### Bug Fixes

- **Button:** fix Button content not center-aligned ([#3087](https://github.com/rsuite/rsuite/issues/3087)) ([28ff13b](https://github.com/rsuite/rsuite/commit/28ff13b2c2ab8f08ccaa854caffa0a5674d1aabc))

# [5.28.0](https://github.com/rsuite/rsuite/compare/v5.27.0...v5.28.0) (2023-02-24)

### Bug Fixes

- **DateRangePicker:** fix lifecycle for Picker Toggle ([#3074](https://github.com/rsuite/rsuite/issues/3074)) ([f46717b](https://github.com/rsuite/rsuite/commit/f46717b4b464513d64b226faba9a6d8bacc52678))

### Features

- **i18n:** added Hungarian locale (hu_HU) ([#3075](https://github.com/rsuite/rsuite/issues/3075)) ([4df03c2](https://github.com/rsuite/rsuite/commit/4df03c24660dc6b09417c562da0e1ffe68103bad))

# [5.27.0](https://github.com/rsuite/rsuite/compare/v5.26.1...v5.27.0) (2023-02-17)

### Bug Fixes

- **Message,Notification:** duration property migrated to `toaster.push` option ([#3065](https://github.com/rsuite/rsuite/issues/3065)) ([f18cc32](https://github.com/rsuite/rsuite/commit/f18cc32e4822fa3596b350efe0dc31f286b3918b))
- **Schema:** add missing Types.MixedType ([#3058](https://github.com/rsuite/rsuite/issues/3058)) ([b6c9654](https://github.com/rsuite/rsuite/commit/b6c965449f5eb1d13b72b02cfd16f454bc942c90))

### Features

- **Button:** add startIcon and endIcon props ([#3067](https://github.com/rsuite/rsuite/issues/3067)) ([d3e967e](https://github.com/rsuite/rsuite/commit/d3e967e3be84ab6f76eb5a2415989a4f592c6674))

## [5.26.1](https://github.com/rsuite/rsuite/compare/v5.26.0...v5.26.1) (2023-02-09)

### Bug Fixes

- **Form.Control:** shouldResetWithUnmount isn't working ([#3055](https://github.com/rsuite/rsuite/issues/3055)) ([98c7e1d](https://github.com/rsuite/rsuite/commit/98c7e1d1959e46a6bec97931f159abbaf32dd779))

# [5.26.0](https://github.com/rsuite/rsuite/compare/v5.25.0...v5.26.0) (2023-02-03)

### Bug Fixes

- **DatePicker:** fix uncontrolled default date on calendar ([#3045](https://github.com/rsuite/rsuite/issues/3045)) ([c530b25](https://github.com/rsuite/rsuite/commit/c530b2550c62a8343eb759b60942858a0921c2a2))
- **Form.Control:** fix `acceptor` prop can not accept `Toggle` ([#3048](https://github.com/rsuite/rsuite/issues/3048)) ([43a413a](https://github.com/rsuite/rsuite/commit/43a413a0b96b3adb88deea54e41b56c582d4e3b6))
- **Nav.Menu:** open with hover trigger in Navbar ([#3041](https://github.com/rsuite/rsuite/issues/3041)) ([ddbc325](https://github.com/rsuite/rsuite/commit/ddbc3253d5e714d03c5a43daa7bd2c52adec5638))

### Features

- **i18n:** added Dutch locale (nl_NL) ([#3035](https://github.com/rsuite/rsuite/issues/3035)) ([47342c9](https://github.com/rsuite/rsuite/commit/47342c9373c02ce9393fd03693d9e45cc601a186))

# [5.25.0](https://github.com/rsuite/rsuite/compare/v5.24.1...v5.25.0) (2023-01-20)

### Bug Fixes

- **Breadcrumb:** improve font color for active item ([#3028](https://github.com/rsuite/rsuite/issues/3028)) ([1efcbf9](https://github.com/rsuite/rsuite/commit/1efcbf90a345ee93928ca13c181c103d247e869d))
- **Breadcrumb:** rendered breadcrumbs as span when href is not specified ([#3027](https://github.com/rsuite/rsuite/issues/3027)) ([8ad16e4](https://github.com/rsuite/rsuite/commit/8ad16e4d572b55892a50c0cad747554039b43398))
- **Button:** fix disabled icon button bug in dark mode ([#3020](https://github.com/rsuite/rsuite/issues/3020)) ([8975eff](https://github.com/rsuite/rsuite/commit/8975eff6b6e9a4ec9c2ed4c58cfbdf4f23e5d94a))
- **DatePicker:** fix first click not working on month selection ([#3019](https://github.com/rsuite/rsuite/issues/3019)) ([42eeaa3](https://github.com/rsuite/rsuite/commit/42eeaa3cc5e19442157f771f02dab850f257c2dc))
- **Whisper:** add type checking for child components ([#3012](https://github.com/rsuite/rsuite/issues/3012)) ([c189119](https://github.com/rsuite/rsuite/commit/c18911903141423d79eb79d5313bc47dd974705e))

### Features

- **CustomProvider:** add support for disableRipple on `<CustomProvider>` ([#3030](https://github.com/rsuite/rsuite/issues/3030)) ([c6bb7ad](https://github.com/rsuite/rsuite/commit/c6bb7ade76ea843b43e799c5cb797b6b5e69d98f))

### Performance Improvements

- **Button:** improved button color when hovered and activated ([#3022](https://github.com/rsuite/rsuite/issues/3022)) ([7973696](https://github.com/rsuite/rsuite/commit/7973696c2854d7199fc27d040dffe45dc356dc9a))

## [5.24.1](https://github.com/rsuite/rsuite/compare/v5.24.0...v5.24.1) (2023-01-12)

### Bug Fixes

- **DatePicker,DateRangePicker:** fix the background color error when the cell is hovered ([#3018](https://github.com/rsuite/rsuite/issues/3018)) ([9d6f43e](https://github.com/rsuite/rsuite/commit/9d6f43e6db6049b7fdcc8514e071d870b785ecbb))
- **MultiCascader:** fix load async data error in inline mode ([#3015](https://github.com/rsuite/rsuite/issues/3015)) ([081eb14](https://github.com/rsuite/rsuite/commit/081eb14de9fb37d80a95324a669b8089e29ef03c)), closes [#3014](https://github.com/rsuite/rsuite/issues/3014)
- **Navbar.Brand:** fix missing href prop ([#3007](https://github.com/rsuite/rsuite/issues/3007)) ([d0a1f27](https://github.com/rsuite/rsuite/commit/d0a1f276d63e25c295fbef94f82559333ba4c148))
- **Tree:** fix Tree drag preview style error ([#3003](https://github.com/rsuite/rsuite/issues/3003)) ([4830148](https://github.com/rsuite/rsuite/commit/4830148b9e325bee926a2bfefe0786c08952ec79))

### Performance Improvements

- **CSS transitions:** improved duration of transitions ([#3016](https://github.com/rsuite/rsuite/issues/3016)) ([d1829da](https://github.com/rsuite/rsuite/commit/d1829da2e77131e031479ef9aa4f6d00d6307a52))

# [5.24.0](https://github.com/rsuite/rsuite/compare/v5.23.3...v5.24.0) (2022-12-30)

### Bug Fixes

- **AutoComplete:** fix AutoComplete size property not working ([#2990](https://github.com/rsuite/rsuite/issues/2990)) ([add665b](https://github.com/rsuite/rsuite/commit/add665b82b9d2cbd21e07576bf77f74e18991e21))
- **DatePicker:** fix inconsistency between month selectable state and ok button clickable state ([#2984](https://github.com/rsuite/rsuite/issues/2984)) ([70e6aba](https://github.com/rsuite/rsuite/commit/70e6aba0b7a3216c9f8b59b033826e55bebac1a1))
- **Sidenav:** fix Sidenav multilevel Nav.Menu arrow icon exception ([#2986](https://github.com/rsuite/rsuite/issues/2986)) ([87f6748](https://github.com/rsuite/rsuite/commit/87f67482b60eae4ed445246fe3e6ac9b0cad0385))

### Features

- **Dropdown:** add Dropdown.Separator component ([#2979](https://github.com/rsuite/rsuite/issues/2979)) ([db6fcbb](https://github.com/rsuite/rsuite/commit/db6fcbbd88961e3506f6b2d2146cf43717d1e1db))

## [5.23.3](https://github.com/rsuite/rsuite/compare/v5.23.2...v5.23.3) (2022-12-16)

### Bug Fixes

- **Modal:** fix close button alignment and color ([#2973](https://github.com/rsuite/rsuite/issues/2973)) ([b1eb5b4](https://github.com/rsuite/rsuite/commit/b1eb5b406a29788290a704414cc5a19b115690c7))

## [5.23.2](https://github.com/rsuite/rsuite/compare/v5.23.1...v5.23.2) (2022-12-09)

### Bug Fixes

- **Form.HelpText:** change font size to 12px ([#2968](https://github.com/rsuite/rsuite/issues/2968)) ([5c3898e](https://github.com/rsuite/rsuite/commit/5c3898ed2726beb81c09accd4d91963849d0dd31))
- **Nav.Menu:** fix noCaret has No Effect on a Sub-menu ([#2960](https://github.com/rsuite/rsuite/issues/2960)) ([e51fb6b](https://github.com/rsuite/rsuite/commit/e51fb6b593f0221f2ac3288b55658d540db214f9))
- **pickers:** the focused item should be within the container's viewport ([#2957](https://github.com/rsuite/rsuite/issues/2957)) ([cab5c63](https://github.com/rsuite/rsuite/commit/cab5c63ffde3963c72363adf00531ef3ab9d9e83))
- **Tooltip:** should use the default text alignment ([#2965](https://github.com/rsuite/rsuite/issues/2965)) ([3280775](https://github.com/rsuite/rsuite/commit/3280775a699a3683b2c45b543fbd8e6576206142))

## [5.23.1](https://github.com/rsuite/rsuite/compare/v5.23.0...v5.23.1) (2022-12-02)

### Bug Fixes

- **AutoComplete:** fix animation props being passed on Input ([#2950](https://github.com/rsuite/rsuite/issues/2950)) ([4c21993](https://github.com/rsuite/rsuite/commit/4c21993531ef775e9b505d8d1d1fafce04e1b49b))
- **MultiCascader:** fix unable to search for child items when `childKey` is set a value other than "children" ([#2926](https://github.com/rsuite/rsuite/issues/2926)) ([5d35f6c](https://github.com/rsuite/rsuite/commit/5d35f6c1639a49174274ccabf2edd3b40a388c32))

# [5.23.0](https://github.com/rsuite/rsuite/compare/v5.22.2...v5.23.0) (2022-11-25)

### Bug Fixes

- **Dropdown:** fix error on deletion of last Dropdown.Item ([#2931](https://github.com/rsuite/rsuite/issues/2931)) ([8ed39e5](https://github.com/rsuite/rsuite/commit/8ed39e5673beb9224eded31096f5fa08297dfeed))
- **InputNumber:** fix `scrollable` not working ([#2915](https://github.com/rsuite/rsuite/issues/2915)) ([c76589e](https://github.com/rsuite/rsuite/commit/c76589e57c4f01d5b410672b6b7f703a6dfd6deb))

### Features

- **locales:** add Turkish locale file ([#2933](https://github.com/rsuite/rsuite/issues/2933)) ([7277d09](https://github.com/rsuite/rsuite/commit/7277d09f6e2fde3e3e4ac0786f20dd2efaeb9062))
- **locales:** added kk_KZ locale ([#2924](https://github.com/rsuite/rsuite/issues/2924)) ([779a65a](https://github.com/rsuite/rsuite/commit/779a65ad5c255b60a91959d7b9846346982009bb))

## [5.22.2](https://github.com/rsuite/rsuite/compare/v5.22.1...v5.22.2) (2022-11-17)

### Bug Fixes

- **DatePicker:** call onSelect when meridian toggled ([#2907](https://github.com/rsuite/rsuite/issues/2907)) ([9028097](https://github.com/rsuite/rsuite/commit/9028097c0049df152f83b14267c3ec30f6ae7fa9))

## [5.22.1](https://github.com/rsuite/rsuite/compare/v5.22.0...v5.22.1) (2022-11-11)

### Bug Fixes

- **DateRangePicker:** fix time on calendar changing with date change ([#2884](https://github.com/rsuite/rsuite/issues/2884)) ([77529af](https://github.com/rsuite/rsuite/commit/77529af661eac3abec994f146c3c7262a85f2009))

# [5.22.0](https://github.com/rsuite/rsuite/compare/v5.21.0...v5.22.0) (2022-11-03)

### Bug Fixes

- **DateRangePicker:** fix end time not using time on second calendar ([#2852](https://github.com/rsuite/rsuite/issues/2852)) ([b243567](https://github.com/rsuite/rsuite/commit/b243567520404b65bdb4d07d9a150f09730fd66e))
- **Table:** remove transition on hover of table row ([#2858](https://github.com/rsuite/rsuite/issues/2858)) ([9d26226](https://github.com/rsuite/rsuite/commit/9d26226004b618e8acb7b4d0802b1c3757b0a8e6))

### Features

- **DatePicker:** allow ranges on left of calendar ([#2851](https://github.com/rsuite/rsuite/issues/2851)) ([ba2f7ee](https://github.com/rsuite/rsuite/commit/ba2f7ee1355ec70089557f4eab1614f53bfd6857)), closes [#2845](https://github.com/rsuite/rsuite/issues/2845)
- **Table:** support for show full text when hovering over a cell ([#2862](https://github.com/rsuite/rsuite/issues/2862)) ([f8b7eeb](https://github.com/rsuite/rsuite/commit/f8b7eebd9b456c4d154695dcfc6c59ce0b82aeac))
- **Table:** support for show full text when hovering over a cell ([#2862](https://github.com/rsuite/rsuite/issues/2862)) ([5528225](https://github.com/rsuite/rsuite/commit/5528225c432b6e909ce3ee0d82240070886e3811))
- **Table:** support for show full text when hovering over a cell ([#2862](https://github.com/rsuite/rsuite/issues/2862)) ([fe2d769](https://github.com/rsuite/rsuite/commit/fe2d769a53549ec77f510b1d5075bb8c66511647))
- **Table:** support for show full text when hovering over a cell ([#2862](https://github.com/rsuite/rsuite/issues/2862)) ([6c4cf18](https://github.com/rsuite/rsuite/commit/6c4cf18bb9001940cbdbc9c9464faf5783691dc6))

# [5.21.0](https://github.com/rsuite/rsuite/compare/v5.20.0...v5.21.0) (2022-10-27)

### Bug Fixes

- **DateRangePicker:** fix end time will change with the start time ([#2841](https://github.com/rsuite/rsuite/issues/2841)) ([7fb38dd](https://github.com/rsuite/rsuite/commit/7fb38dd6aaf84e018d4f3e06882fb92dfa20e5bd))

### Features

- support React 18 ([#2595](https://github.com/rsuite/rsuite/issues/2595)) ([a071214](https://github.com/rsuite/rsuite/commit/a071214e4cffb2f9607887e776a52af42aed58cb)), closes [#2646](https://github.com/rsuite/rsuite/issues/2646) [#2661](https://github.com/rsuite/rsuite/issues/2661) [#2681](https://github.com/rsuite/rsuite/issues/2681) [#2776](https://github.com/rsuite/rsuite/issues/2776) [#2806](https://github.com/rsuite/rsuite/issues/2806) [#2826](https://github.com/rsuite/rsuite/issues/2826) [#2825](https://github.com/rsuite/rsuite/issues/2825)

# [5.20.0](https://github.com/rsuite/rsuite/compare/v5.19.1...v5.20.0) (2022-10-21)

### Bug Fixes

- **DatePicker:** reset calendar selection after closing picker menu ([#2807](https://github.com/rsuite/rsuite/issues/2807)) ([1ef91a8](https://github.com/rsuite/rsuite/commit/1ef91a846fc6d99c7479e96994aa50da2af9ef9e))
- **Form.Control:** when shouldResetWithUnmount should remove value and error ([#2802](https://github.com/rsuite/rsuite/issues/2802)) ([f8d108a](https://github.com/rsuite/rsuite/commit/f8d108aed3e94811491be63e3373008d12e83b60))

### Features

- **SelectPicker,CheckPicker:** add `loading` prop ([#2808](https://github.com/rsuite/rsuite/issues/2808)) ([3a5e5d5](https://github.com/rsuite/rsuite/commit/3a5e5d5d4b891373c8a05ec4d642103f75920f10))

## [5.19.1](https://github.com/rsuite/rsuite/compare/v5.19.0...v5.19.1) (2022-10-13)

### Bug Fixes

- **Cascader,MultiCascader:** fix sub-columns not being removed when a leaf node is selected ([#2792](https://github.com/rsuite/rsuite/issues/2792)) ([619c7de](https://github.com/rsuite/rsuite/commit/619c7debfca63a58622a1ae4a4776544bebf3405))
- **CheckTreePicker:** fix children node can't uncheck when setting virtualized ([#2782](https://github.com/rsuite/rsuite/issues/2782)) ([#2783](https://github.com/rsuite/rsuite/issues/2783)) ([50f7b89](https://github.com/rsuite/rsuite/commit/50f7b89dbe1a2b59c212e021e1bc42c50e9ebb37))
- **DateRangePicker:** fix predefined range affecting calendar height ([#2794](https://github.com/rsuite/rsuite/issues/2794)) ([957ce4e](https://github.com/rsuite/rsuite/commit/957ce4e197355ecbb9a0aea6cb6c5906ab1e1a2a))
- **TreePicker, CheckTreePicker:** ignore backspace when setting cleanable=false or disabled=true ([#2798](https://github.com/rsuite/rsuite/issues/2798)) ([eefe0eb](https://github.com/rsuite/rsuite/commit/eefe0ebc396ee1764243a1e2c8ec432dc6ce39a5))
- **TreePicker,CheckTreePicker:** fix `renderExtraFooter` causing the … ([#2745](https://github.com/rsuite/rsuite/issues/2745)) ([d7279d1](https://github.com/rsuite/rsuite/commit/d7279d14877e4b3b0ac74abdfeb56836b3a07780)), closes [#2758](https://github.com/rsuite/rsuite/issues/2758)
- **TreePicker,CheckTreePicker:** fix value being cleared internally when value is controlled ([#2788](https://github.com/rsuite/rsuite/issues/2788)) ([4521a27](https://github.com/rsuite/rsuite/commit/4521a2730a7311b7fe095d85e39966a1d56f5d9d)), closes [#2784](https://github.com/rsuite/rsuite/issues/2784)

### Features

- **i18n:** add fr_FR locale ([#2735](https://github.com/rsuite/rsuite/issues/2735)) ([087cfc8](https://github.com/rsuite/rsuite/commit/087cfc885252d764864e075b086f5d980f94db94))

### Performance Improvements

- **CheckTreePicker:** improve performance when using large data ([#2767](https://github.com/rsuite/rsuite/issues/2767)) ([651a8a1](https://github.com/rsuite/rsuite/commit/651a8a1ebb0bf1c1e07e1541ca1f0a61a96a3df4))

# [5.19.0](https://github.com/rsuite/rsuite/compare/v5.18.1...v5.19.0) (2022-09-23)

### Bug Fixes

- **CheckPicker,SelectPicker:** fix inconsistent label spacing ([#2739](https://github.com/rsuite/rsuite/issues/2739)) ([2441d7e](https://github.com/rsuite/rsuite/commit/2441d7efa20e92f11b3266ca2434a9529b31ecb4))
- **Dropdown:** fix `disabled` not working when trigger is set to hover or contextMenu ([#2740](https://github.com/rsuite/rsuite/issues/2740)) ([147821c](https://github.com/rsuite/rsuite/commit/147821c54ef7814820a91edb79e0923c99ab6d0b))
- **Sidenav:** fix tooltip blocking menu items ([#2747](https://github.com/rsuite/rsuite/issues/2747)) ([d3568e1](https://github.com/rsuite/rsuite/commit/d3568e18fc5951340951a49c2ac121a786763dd9))
- **Stack:** filter children that should not be rendered ([#2732](https://github.com/rsuite/rsuite/issues/2732)) ([23c283f](https://github.com/rsuite/rsuite/commit/23c283f26da8ed9db4f4975c79b7cfe916f82903))

### Features

- **Stack:** add `Item` to adjust single child ([#2730](https://github.com/rsuite/rsuite/issues/2730)) ([5af6256](https://github.com/rsuite/rsuite/commit/5af625690be33c54def844db3bcf6aa47cc72eed))

## [5.18.1](https://github.com/rsuite/rsuite/compare/v5.18.0...v5.18.1) (2022-09-15)

### Bug Fixes

- **Nav:** fix incorrect height of <Nav.Menu>, fix [#2678](https://github.com/rsuite/rsuite/issues/2678) ([#2716](https://github.com/rsuite/rsuite/issues/2716)) ([8cefc64](https://github.com/rsuite/rsuite/commit/8cefc64ecfc6614bff4842b193f515064f0b5e3b))
- **Stack:** fix spacing compat for chrome under 84 ([#2718](https://github.com/rsuite/rsuite/issues/2718)) ([a75b6a6](https://github.com/rsuite/rsuite/commit/a75b6a6b8cf0e2aa11abfde6205ddba57f458414))

### Features

- **Calendar:** add a button to collapse the month and time view ([#2722](https://github.com/rsuite/rsuite/issues/2722)) ([b49bfaf](https://github.com/rsuite/rsuite/commit/b49bfaf5b553d1d13c17ba07951306147091ee44))
- **List:** add size prop to ListItem ([#2714](https://github.com/rsuite/rsuite/issues/2714)) ([ed3b023](https://github.com/rsuite/rsuite/commit/ed3b02305ef603d2d1b60bedd849f6c946ef7127))

# [5.18.0](https://github.com/rsuite/rsuite/compare/v5.17.1...v5.18.0) (2022-09-08)

### Bug Fixes

- **CheckTreePicker:** fix uncheckable style errors ([#2695](https://github.com/rsuite/rsuite/issues/2695)) ([b47a048](https://github.com/rsuite/rsuite/commit/b47a048f358ca187079ec049340288c72c8999bd))
- **DateRangePicker:** fix predefined range and OK button conflict ([#2701](https://github.com/rsuite/rsuite/issues/2701)) ([e538d57](https://github.com/rsuite/rsuite/commit/e538d57e209548f2ca9c9b1f937e275181ae97d9))
- **Dropdown.Menu:** fix custom className overriding rsuite classNames ([#2703](https://github.com/rsuite/rsuite/issues/2703)) ([db1a4db](https://github.com/rsuite/rsuite/commit/db1a4dbf5ddd7cbd4765e91f76bc4c4f8eb598c2))
- **FormControl:** fix InputGroup not filling the container when fluid ([#2689](https://github.com/rsuite/rsuite/issues/2689)) ([d7b5550](https://github.com/rsuite/rsuite/commit/d7b55506d9810fd854c4ebe60c99a36e9fb9545e))
- **Input:** fix missing focus ring when mouse hover ([#2702](https://github.com/rsuite/rsuite/issues/2702)) ([f548514](https://github.com/rsuite/rsuite/commit/f548514ed93945d27903190627d03380874d8f1a))
- **List:** fix helper/holder classname ([#2697](https://github.com/rsuite/rsuite/issues/2697)) ([cd2c42d](https://github.com/rsuite/rsuite/commit/cd2c42d4e3fc9659e3936bec26117cc79882420c))

### Features

- **List:** allow sort with non-adjacent collection ([#2690](https://github.com/rsuite/rsuite/issues/2690)) ([24cfffb](https://github.com/rsuite/rsuite/commit/24cfffb32253e5da463807768318be22bc647ceb))
- **Uploader:** add support for Button properties on Uploader ([#2688](https://github.com/rsuite/rsuite/issues/2688)) ([6c07781](https://github.com/rsuite/rsuite/commit/6c07781c13a1d46a9220511cd046d668ce593122))

## [5.17.1](https://github.com/rsuite/rsuite/compare/v5.17.0...v5.17.1) (2022-09-01)

### Bug Fixes

- **InputGroup:** fix icons not being vertically centered within the input ([#2680](https://github.com/rsuite/rsuite/issues/2680)) ([b10a050](https://github.com/rsuite/rsuite/commit/b10a050fb52f6fbc23e2cc308d57d67a515596e7))

### Features

- **DatePicker,DateRangePicker:** support to disable keyboard input ([#2673](https://github.com/rsuite/rsuite/issues/2673)) ([01ec4a8](https://github.com/rsuite/rsuite/commit/01ec4a8587d72842f0ae2d76ee51715e9bf7c6c2))

# [5.17.0](https://github.com/rsuite/rsuite/compare/v5.16.6...v5.17.0) (2022-08-26)

### Features

- **DateRangePicker:** supports placing predefined ranges on the left ([#2670](https://github.com/rsuite/rsuite/issues/2670)) ([8df4a61](https://github.com/rsuite/rsuite/commit/8df4a61d3b81e6054369197ff44e1416ea1aefbb))

## [5.16.6](https://github.com/rsuite/rsuite/compare/v5.16.5...v5.16.6) (2022-08-18)

### Bug Fixes

- **Button:** use [@cursor-disabled](https://github.com/cursor-disabled) intead of hardcoded cursor ([#2658](https://github.com/rsuite/rsuite/issues/2658)) ([5731762](https://github.com/rsuite/rsuite/commit/57317622eb2d65e94e0a8bb962512232cc4dfd3d))
- **DatePicker,DateRangePicker:** display month name as title of month calendar view ([#2660](https://github.com/rsuite/rsuite/issues/2660)) ([1e812ef](https://github.com/rsuite/rsuite/commit/1e812ef7510ea7b82beda7c058bd07080db198f5))
- **Form.Control:** apply className to accepter component ([#2662](https://github.com/rsuite/rsuite/issues/2662)) ([a164d28](https://github.com/rsuite/rsuite/commit/a164d287acfe8be2f98080e3b7eb15971f47809f))

## [5.16.5](https://github.com/rsuite/rsuite/compare/v5.16.4...v5.16.5) (2022-08-11)

### Bug Fixes

- **AutoComplete:** fix `listbox` not keeping the same width as `input` ([#2645](https://github.com/rsuite/rsuite/issues/2645)) ([ad09288](https://github.com/rsuite/rsuite/commit/ad09288e0fc38f964524466a79ca25532dc221f8))
- **AutoComplete:** fix missing definition of string in datatype ([#2644](https://github.com/rsuite/rsuite/issues/2644)) ([528e291](https://github.com/rsuite/rsuite/commit/528e29154d188d928e3d93853f5ed0673b932b4a))
- **DateRangePicker:** fix default time not working ([#2642](https://github.com/rsuite/rsuite/issues/2642)) ([915de28](https://github.com/rsuite/rsuite/commit/915de2820af418195e7f9a6ed228c1b05362d633))

## [5.16.4](https://github.com/rsuite/rsuite/compare/v5.16.3...v5.16.4) (2022-08-04)

### Bug Fixes

- **DatePicker:** fix issues with focus event ([#2636](https://github.com/rsuite/rsuite/issues/2636)) ([76b68aa](https://github.com/rsuite/rsuite/commit/76b68aa79dd129a210238517c279fe41b0da89ac))

## [5.16.3](https://github.com/rsuite/rsuite/compare/v5.16.2...v5.16.3) (2022-07-29)

### Bug Fixes

- **DateRangePicker:** fix predefined `ranges` cannot close picker ([#2614](https://github.com/rsuite/rsuite/issues/2614)) ([7773899](https://github.com/rsuite/rsuite/commit/7773899d5cda5ce53d556be85abc76f23166fc28))
- **listProps:** fix properties in listProps to be optional ([#2622](https://github.com/rsuite/rsuite/issues/2622)) ([650abbd](https://github.com/rsuite/rsuite/commit/650abbdd7b1073fb1a5a3d3ca761127ac2dcdd08))

## [5.16.2](https://github.com/rsuite/rsuite/compare/v5.16.1...v5.16.2) (2022-07-28)

### Bug Fixes

- **CustomProvider:** fix warnings caused by server-side rendering ([#2599](https://github.com/rsuite/rsuite/issues/2599)) ([ea05efb](https://github.com/rsuite/rsuite/commit/ea05efba3c53bf7e04ea4caa7b378a762b85af93))
- **DateRangePicker:** improved experience for date range selection ([#2618](https://github.com/rsuite/rsuite/issues/2618)) ([225fc08](https://github.com/rsuite/rsuite/commit/225fc08e21d43c41d92c1514f67c05eb660bf9dd))
- **focus:** fix outline style for form components when focused ([#2601](https://github.com/rsuite/rsuite/issues/2601)) ([0e2f9df](https://github.com/rsuite/rsuite/commit/0e2f9dffe5e882fc56727eb8ba8901aaf1b7d7b3))
- **OverlayTrigger:** fix invalid rendering without followCursor ([#2600](https://github.com/rsuite/rsuite/issues/2600)) ([08abc8e](https://github.com/rsuite/rsuite/commit/08abc8e825af55d8334a6e6057d4f5582a3197ac))
- **Panel:** allow custom header in collapsible panels ([#2611](https://github.com/rsuite/rsuite/issues/2611)) ([6372d44](https://github.com/rsuite/rsuite/commit/6372d441235b5b65036c257608098df01f93bf6d))
- **Picker:** add missing caretAs prop declaration ([#2592](https://github.com/rsuite/rsuite/issues/2592)) ([faabba4](https://github.com/rsuite/rsuite/commit/faabba4b32d82f819b5c5431c3d7040798db1765))
- **Picker:** fix style dependency ([#2612](https://github.com/rsuite/rsuite/issues/2612)) ([0b5b1d6](https://github.com/rsuite/rsuite/commit/0b5b1d60909a069c317f069e9ab235da70eb4aa3))
- **SelectPicker:** make controlled value nullable ([#2591](https://github.com/rsuite/rsuite/issues/2591)) ([6619a75](https://github.com/rsuite/rsuite/commit/6619a75eca9eabf9bf08dd84dee78f1df0e094ca))
- **treelike:** fix data item stringify throw error ([#2606](https://github.com/rsuite/rsuite/issues/2606)) ([3a586d2](https://github.com/rsuite/rsuite/commit/3a586d28e075b5bdd95d8df948ce4887570fab1d))

## [5.16.1](https://github.com/rsuite/rsuite/compare/v5.16.0...v5.16.1) (2022-07-15)

### Bug Fixes

- **InputNumber:** fix unexpected focus ring when used within an InputGroup ([#2585](https://github.com/rsuite/rsuite/issues/2585)) ([6f76b57](https://github.com/rsuite/rsuite/commit/6f76b5752bca2e11639d7fe34dd927dd84c98f73))
- **SelectPicker,CheckPicker:** add missing label prop declaration ([#2586](https://github.com/rsuite/rsuite/issues/2586)) ([e1a8cfe](https://github.com/rsuite/rsuite/commit/e1a8cfe32223ec210ac9a5ff793b973d4bcac131))

# [5.16.0](https://github.com/rsuite/rsuite/compare/v5.15.2...v5.16.0) (2022-07-07)

### Features

- **SelectPicker,CheckPicker:** add label prop ([#2572](https://github.com/rsuite/rsuite/issues/2572)) ([d00f442](https://github.com/rsuite/rsuite/commit/d00f442c46eb5edbb13d127b23f1c2eda6cf60d7))

## [5.15.2](https://github.com/rsuite/rsuite/compare/v5.15.1...v5.15.2) (2022-06-30)

### Bug Fixes

- **DateRangePicker:** fix Ok button not clickable ([#2564](https://github.com/rsuite/rsuite/issues/2564)) ([f80f94d](https://github.com/rsuite/rsuite/commit/f80f94db2a1c9c7738c3fc514e24c8ceb7b50d9b))
- **InputGroup.Addon:** extend props from as element ([#2559](https://github.com/rsuite/rsuite/issues/2559)) ([d0c947c](https://github.com/rsuite/rsuite/commit/d0c947c7a6ea5fd3ed95a71b573c957be4d5f009))
- **Whisper:** specify speaker function argument types ([#2558](https://github.com/rsuite/rsuite/issues/2558)) ([6dda5c6](https://github.com/rsuite/rsuite/commit/6dda5c61d6f833174a576d814ce27287c92ed33f))

## [5.15.1](https://github.com/rsuite/rsuite/compare/v5.15.0...v5.15.1) (2022-06-16)

### Features

- **Uploader:** support `method` on `<Uploader>` ([#2541](https://github.com/rsuite/rsuite/issues/2541)) ([d3b821a](https://github.com/rsuite/rsuite/commit/d3b821a8f2acbd3162ec965ffdbaac07af23a727))

# [5.15.0](https://github.com/rsuite/rsuite/compare/v5.14.0...v5.15.0) (2022-06-09)

### Features

- **less:** expose primary palette variables ([#2532](https://github.com/rsuite/rsuite/issues/2532)) ([b1d187d](https://github.com/rsuite/rsuite/commit/b1d187da0f831a31d87f0e73ab28216d86394327))

# [5.14.0](https://github.com/rsuite/rsuite/compare/v5.13.1...v5.14.0) (2022-06-02)

### Bug Fixes

- **Button:** remove underline when hovered ([#2516](https://github.com/rsuite/rsuite/issues/2516)) ([8bbb10d](https://github.com/rsuite/rsuite/commit/8bbb10db425dadd4110db60b8b7066d8f97bab54))
- **Dropdown:** fix vertical alignment of submenus ([#2524](https://github.com/rsuite/rsuite/issues/2524)) ([7c0ef52](https://github.com/rsuite/rsuite/commit/7c0ef52e9c7f57abfd97814725f5b3b82cc5dd70))
- **Form:** make FormInstance methods non-nullable ([#2521](https://github.com/rsuite/rsuite/issues/2521)) ([225af8a](https://github.com/rsuite/rsuite/commit/225af8a9abdffaf76101f28e3690b7ede6a16139))
- **Modal:** expose missing props ([#2522](https://github.com/rsuite/rsuite/issues/2522)) ([2ed7040](https://github.com/rsuite/rsuite/commit/2ed704002d03cec1478de879b08c0d3e7fd2dcf1))
- **Panel:** fix accordion not collapsible expanded panel ([#2514](https://github.com/rsuite/rsuite/issues/2514)) ([10c80f2](https://github.com/rsuite/rsuite/commit/10c80f26622e2f5b8c2e81731b66e2276d5622c4))
- **Sidenav:** display tooltip when hovering collapsed Sidenav item ([#2504](https://github.com/rsuite/rsuite/issues/2504)) ([d1238eb](https://github.com/rsuite/rsuite/commit/d1238ebb22e2458a780846903e042de72c1d8143))
- **Sidenav:** remove subtle item bg when focused by mouse ([#2511](https://github.com/rsuite/rsuite/issues/2511)) ([819461c](https://github.com/rsuite/rsuite/commit/819461c918e809fa397fe3dc6146510a9ffb1bd2))
- **Table:** fix elements in merged cells being occluded ([#2513](https://github.com/rsuite/rsuite/issues/2513)) ([22e5467](https://github.com/rsuite/rsuite/commit/22e54671cbeb3e63d8480469c3d53744732308f2))

### Features

- **grid:** synchronize all grid size and breakpoint with bootstrap5 ([e8d2d37](https://github.com/rsuite/rsuite/commit/e8d2d372e2280336482de648d9619607b9cb1798))
- **Nav.Menu:** add `openDirection` prop ([#2523](https://github.com/rsuite/rsuite/issues/2523)) ([bd824ac](https://github.com/rsuite/rsuite/commit/bd824ac9359cc5cebb848424d8045986e32c6462))
- **toaster:** add support for useToaster ([#2518](https://github.com/rsuite/rsuite/issues/2518)) ([75cb960](https://github.com/rsuite/rsuite/commit/75cb9601b56fbdc64a09b9bbc93aaf2b22b715c4))
- **Tooltip,Popover:** add arrow props to hide arrow indicator ([48d876f](https://github.com/rsuite/rsuite/commit/48d876f7d2211f5e9cb1db7e8f552152821e05ac))
- **Tooltip,Popover:** add followCursor props to enable speaker follow cursor ([e3bf75d](https://github.com/rsuite/rsuite/commit/e3bf75d4e4c537bf677c404fce84b76266531630))

### Performance Improvements

- **Dropdown:** improve contrast of active Dropdown item background color ([#2510](https://github.com/rsuite/rsuite/issues/2510)) ([35a418a](https://github.com/rsuite/rsuite/commit/35a418ae5f2104e6ac56ebe5c91d426025fce94a))

## [5.13.1](https://github.com/rsuite/rsuite/compare/v5.13.0...v5.13.1) (2022-05-27)

### Bug Fixes

- **CheckTreePicker:** fix duplicated key when data changed ([#2486](https://github.com/rsuite/rsuite/issues/2486)) ([#2500](https://github.com/rsuite/rsuite/issues/2500)) ([d155719](https://github.com/rsuite/rsuite/commit/d155719a9ae9d9cec119a0c33281c628379b4a78))
- **Sidenav:** correct Sidenav.Toggle styles ([#2497](https://github.com/rsuite/rsuite/issues/2497)) ([b3168e4](https://github.com/rsuite/rsuite/commit/b3168e426c3a2caad1689e9e9d3babf1d76022b8))
- **Sidenav:** correct subtle Sidenav item hover styles ([#2498](https://github.com/rsuite/rsuite/issues/2498)) ([2d853ee](https://github.com/rsuite/rsuite/commit/2d853ee8419a3283683bbf897442b9bc789b5a2a))
- **Sidenav:** fix Sidenav.Toggle icon direction ([#2495](https://github.com/rsuite/rsuite/issues/2495)) ([c490632](https://github.com/rsuite/rsuite/commit/c490632cc613807ff27124140b4250fc132aa8b2))
- **Whisper:** correct type declarations for ref ([856877a](https://github.com/rsuite/rsuite/commit/856877aec5a20710b94f6ddf241be76ecd34c88d))

### Features

- export WhisperInstance ([1c4eb5f](https://github.com/rsuite/rsuite/commit/1c4eb5ffbb6b5e69987436c03cc133f39c245866))

# [5.13.0](https://github.com/rsuite/rsuite/compare/v5.12.0...v5.13.0) (2022-05-19)

### Bug Fixes

- **listbox:** fix broken keyboard navigation after filtering ([#2491](https://github.com/rsuite/rsuite/issues/2491)) ([329623a](https://github.com/rsuite/rsuite/commit/329623a21e8d551db3e634894ddcbb3658b1579d))

### Performance Improvements

- **Cascader:** apply tree view pattern ([#2492](https://github.com/rsuite/rsuite/issues/2492)) ([f3a5808](https://github.com/rsuite/rsuite/commit/f3a5808eb60cc4f5250cce908322a702a91a9d96))

# [5.12.0](https://github.com/rsuite/rsuite/compare/v5.11.0...v5.12.0) (2022-05-12)

### Features

- **Form.Control:** add `rule` prop ([#2482](https://github.com/rsuite/rsuite/issues/2482)) ([d1917df](https://github.com/rsuite/rsuite/commit/d1917dfcb9474236f756551fa8908edc85e37197))

# [5.11.0](https://github.com/rsuite/rsuite/compare/v5.10.0...v5.11.0) (2022-05-05)

### Bug Fixes

- **ButtonToolbar:** change item gap to 10px ([#2475](https://github.com/rsuite/rsuite/issues/2475)) ([d97810a](https://github.com/rsuite/rsuite/commit/d97810ab4cd401b27be929569ce85bff0f498498))
- **Dropdown.Menu:** fix expected highlight item when focus moving in ([#2477](https://github.com/rsuite/rsuite/issues/2477)) ([b9fdea5](https://github.com/rsuite/rsuite/commit/b9fdea5d57ce76ddc80f5e9776feab02e4ebfacd))
- **Menubar:** fix unhandled nullish value ([#2478](https://github.com/rsuite/rsuite/issues/2478)) ([10d515d](https://github.com/rsuite/rsuite/commit/10d515d06dd08f2b93e5d7dbd3be7b1114185cab))

### Features

- **DateRangePicker:** expose calendars renderTitle ([#2480](https://github.com/rsuite/rsuite/issues/2480)) ([4461e09](https://github.com/rsuite/rsuite/commit/4461e09ec3917f379b5df213db16cedade6f39e1))

# [5.10.0](https://github.com/rsuite/rsuite/compare/v5.9.0...v5.10.0) (2022-04-28)

### Features

- **FormControl:** support `shouldResetWithUnmount` on `<FormControl>` ([#2468](https://github.com/rsuite/rsuite/issues/2468)) ([69dee5e](https://github.com/rsuite/rsuite/commit/69dee5ece1c20bdc1e1f42429e93150afb7995d8))

# [5.9.0](https://github.com/rsuite/rsuite/compare/v5.8.1...v5.9.0) (2022-04-21)

### Features

- **Dropdown:** add `open` and `defaultOpen` props ([#2442](https://github.com/rsuite/rsuite/issues/2442)) ([ab13d63](https://github.com/rsuite/rsuite/commit/ab13d6368676c19f8a4fb041e84a423b1a810914))

## [5.8.1](https://github.com/rsuite/rsuite/compare/v5.8.0...v5.8.1) (2022-04-15)

### Bug Fixes

- **Cascader:** infer value and onChange types from data ([#2449](https://github.com/rsuite/rsuite/issues/2449)) ([2a8ef48](https://github.com/rsuite/rsuite/commit/2a8ef481e49dec2570868982e0dbbba808efbc03))
- **Dropdown.Menu:** de-highlight item when mouse leaving ([#2443](https://github.com/rsuite/rsuite/issues/2443)) ([0d7b963](https://github.com/rsuite/rsuite/commit/0d7b96350b79a41557d1a7b67140c9654755194e))

# [5.8.0](https://github.com/rsuite/rsuite/compare/v5.7.1...v5.8.0) (2022-04-07)

### Bug Fixes

- **RangeSlider:** fix RangeSlider progress bar misalignment ([#2435](https://github.com/rsuite/rsuite/issues/2435)) ([e612ee3](https://github.com/rsuite/rsuite/commit/e612ee3b6bb97217ad08744c6b57b47e21397944))
- **SelectPicker:** call onSearch with empty string when closed ([#2411](https://github.com/rsuite/rsuite/issues/2411)) ([c6e5d54](https://github.com/rsuite/rsuite/commit/c6e5d54bdda0cdc61b65fbed78518ccef5d7672f))
- **Toggle:** add missing properties to onChange event target ([#2422](https://github.com/rsuite/rsuite/issues/2422)) ([5d1d5a2](https://github.com/rsuite/rsuite/commit/5d1d5a29a03f642c88aa66851163c9bb20d69684))

### Features

- **Cascader:** add `renderSearchItem` for customizing search result ([#2427](https://github.com/rsuite/rsuite/issues/2427)) ([e1b1dbd](https://github.com/rsuite/rsuite/commit/e1b1dbd2fd6cde10dfb1e041d9483b6748a0855f))
- **DateRangePicker:** export type definition ([#2434](https://github.com/rsuite/rsuite/issues/2434)) ([76e4bc3](https://github.com/rsuite/rsuite/commit/76e4bc38e8e939ae6ffbcf5bc154281b4ec9360c))

## [5.7.1](https://github.com/rsuite/rsuite/compare/v5.7.0...v5.7.1) (2022-04-02)

### Bug Fixes

- **Checkbox:** correct checked state in onChange callback ([#2430](https://github.com/rsuite/rsuite/issues/2430)) ([c6819f9](https://github.com/rsuite/rsuite/commit/c6819f98fe33e197376ecd1e301eaa471c6c2178))

# [5.7.0](https://github.com/rsuite/rsuite/compare/v5.6.6...v5.7.0) (2022-03-31)

### Bug Fixes

- **Checkbox:** set checked attribute on underlying input ([#2419](https://github.com/rsuite/rsuite/issues/2419)) ([5ded872](https://github.com/rsuite/rsuite/commit/5ded8720c70c1fe4aee3941a81c0d7ec3b0c7423))
- **Dropdown:** Fix menu item hover highlight ([#2415](https://github.com/rsuite/rsuite/issues/2415)) ([59453cc](https://github.com/rsuite/rsuite/commit/59453cc0c3c6f648b2797c48473c22104e579b4a))
- **Dropdown:** Fixed Triggering onSelect twice on Dropdown Menu ([#2414](https://github.com/rsuite/rsuite/issues/2414)) ([e09eee5](https://github.com/rsuite/rsuite/commit/e09eee5f6dac88816ecbf8d20f3bb1b78f4afa71))

### Features

- **Form:** export useFormClassNames hook ([#2420](https://github.com/rsuite/rsuite/issues/2420)) ([7e2bb85](https://github.com/rsuite/rsuite/commit/7e2bb8548103117a2df004f367fbde6609fcc216))

## [5.6.6](https://github.com/rsuite/rsuite/compare/v5.6.5...v5.6.6) (2022-03-24)

### Bug Fixes

- **InputNumber:** make plus/minus buttons unfocusable ([#2398](https://github.com/rsuite/rsuite/issues/2398)) ([ab4c721](https://github.com/rsuite/rsuite/commit/ab4c7218f20fd6aa6f4bad7818d403a3b6fd68df))
- **Uploader:** expose missing public types ([#2404](https://github.com/rsuite/rsuite/issues/2404)) ([5b1791f](https://github.com/rsuite/rsuite/commit/5b1791f0f0b23a230d03772178e9069bc16c8aa9))

## [5.6.5](https://github.com/rsuite/rsuite/compare/v5.6.4...v5.6.5) (2022-03-17)

### Features

- **Pickers:** `groupBy` supports dot notation ([#2397](https://github.com/rsuite/rsuite/issues/2397)) ([2ba7c0b](https://github.com/rsuite/rsuite/commit/2ba7c0b622c68b2fc526aa7ad2feaa8e73767e9c))

## [5.6.4](https://github.com/rsuite/rsuite/compare/v5.6.3...v5.6.4) (2022-03-10)

### Bug Fixes

- **CheckTree:** fix missing type definition [#2388](https://github.com/rsuite/rsuite/issues/2388) ([#2391](https://github.com/rsuite/rsuite/issues/2391)) ([0fe4e9f](https://github.com/rsuite/rsuite/commit/0fe4e9f34d7f07354541f4d23b0278cd1d892c2e))
- **Sidenav:** remove underline from focused sidenav item ([#2387](https://github.com/rsuite/rsuite/issues/2387)) ([a22f569](https://github.com/rsuite/rsuite/commit/a22f569a8c3f2b71513af20b4be6607cd1825783))

## [5.6.3](https://github.com/rsuite/rsuite/compare/v5.6.2...v5.6.3) (2022-03-05)

## [5.6.2](https://github.com/rsuite/rsuite/compare/v5.6.1...v5.6.2) (2022-02-24)

### Bug Fixes

- **Affix:** fix left offset not update after position change ([#2370](https://github.com/rsuite/rsuite/issues/2370)) ([eba3536](https://github.com/rsuite/rsuite/commit/eba353685f4892e1143b8c249ac956b2522a2993))
- **typescript:** remove not-null assertion operator ([#2359](https://github.com/rsuite/rsuite/issues/2359)) ([5c07293](https://github.com/rsuite/rsuite/commit/5c07293f5c9c2d4deee768be17e8cea840868708))

## [5.6.1](https://github.com/rsuite/rsuite/compare/v5.6.0...v5.6.1) (2022-02-17)

### Bug Fixes

- **caretAs:** fix DatePicker and DateRangePicker cannot replace caret ([#2360](https://github.com/rsuite/rsuite/issues/2360)) ([1e619b2](https://github.com/rsuite/rsuite/commit/1e619b2ef7abc58a93f6d6d4fc78ffea07761c81))
- **IconButton:** infer addtional props from as prop ([#2343](https://github.com/rsuite/rsuite/issues/2343)) ([3b6c25c](https://github.com/rsuite/rsuite/commit/3b6c25c103ed33a86baa47b8c757462da7ae8c4c))
- **Toaster:** code breaks when toaster is in a useEffect ([#2353](https://github.com/rsuite/rsuite/issues/2353)) ([d083fe2](https://github.com/rsuite/rsuite/commit/d083fe27013659cbc45196b7ead9ff5863404fb8)), closes [#2336](https://github.com/rsuite/rsuite/issues/2336)
- **useTimeout:** fix callback not being called after timeout ([#2349](https://github.com/rsuite/rsuite/issues/2349)) ([e82a12a](https://github.com/rsuite/rsuite/commit/e82a12aa2929cf66e7a3c6d70008c5bedb4ab128))

# [5.6.0](https://github.com/rsuite/rsuite/compare/v5.5.2...v5.6.0) (2022-02-10)

### Bug Fixes

- **DatePicker:** fixed oneTap to work in month view ([#2342](https://github.com/rsuite/rsuite/issues/2342)) ([d5368cd](https://github.com/rsuite/rsuite/commit/d5368cdfb2a6386bfb509a6316520e450f35f2b4))
- handle some null value branch ([#2323](https://github.com/rsuite/rsuite/issues/2323)) ([3ffd1d9](https://github.com/rsuite/rsuite/commit/3ffd1d966d5fd7f0a4f42bb8b08bf0cb65955fef))

### Features

- **Carousel:** Expose active index ([#2338](https://github.com/rsuite/rsuite/issues/2338)) ([beac483](https://github.com/rsuite/rsuite/commit/beac48395c9fc7c30efb3f49f81e8969cd3ee71d))

## [5.5.2](https://github.com/rsuite/rsuite/compare/v5.5.1...v5.5.2) (2022-01-27)

### Features

- **Cascader:** add parent node in serach result while parentSelectable ([#2313](https://github.com/rsuite/rsuite/issues/2313)) ([e677bb6](https://github.com/rsuite/rsuite/commit/e677bb6b75d0cc26dafedc8e5326d413969c2867))

## [5.5.1](https://github.com/rsuite/rsuite/compare/v5.5.0...v5.5.1) (2022-01-21)

### Bug Fixes

- **Carousel:** add a flex-wrap property on toolbar buttons ([#2302](https://github.com/rsuite/rsuite/issues/2302)) ([a9a9113](https://github.com/rsuite/rsuite/commit/a9a911378c4aaeba43233dd3acdc05913a9bf6ae))
- **CheckTreePicker:** fix CheckTreePicker label style ([#2304](https://github.com/rsuite/rsuite/issues/2304)) ([07eb5ac](https://github.com/rsuite/rsuite/commit/07eb5acd4e8283529619ad2b4d6003b0c4f8614d))
- **DateRangePicker:** fix month not selectable on calendar ([#2312](https://github.com/rsuite/rsuite/issues/2312)) ([5199845](https://github.com/rsuite/rsuite/commit/5199845ee435e923c807da5e0813f4ba06a86798))
- **Sidenav:** hide focus ring when interacting with mouse ([#2311](https://github.com/rsuite/rsuite/issues/2311)) ([9413bc9](https://github.com/rsuite/rsuite/commit/9413bc9a48fb8a3f915cc811b3392ba4e65b0b70))

### Performance Improvements

- Responsive for small screen ([#2293](https://github.com/rsuite/rsuite/issues/2293)) ([cadc42e](https://github.com/rsuite/rsuite/commit/cadc42e39baee174ff7d5577ea933cb471ef5bd0))

# [5.5.0](https://github.com/rsuite/rsuite/compare/v5.4.4...v5.5.0) (2022-01-13)

### Bug Fixes

- **Dropdown:** infer toggleAs component props ([#2299](https://github.com/rsuite/rsuite/issues/2299)) ([84611cc](https://github.com/rsuite/rsuite/commit/84611cc6f88e1d9cd712bc3f08be559d0a146ba0))
- **InputNumber:** inherit html input attributes ([#2298](https://github.com/rsuite/rsuite/issues/2298)) ([d7622ee](https://github.com/rsuite/rsuite/commit/d7622eed72b36ed15e91f606027d2e540391bdc7))
- **MultiCascader:** fix not rendering the count of selected values ([#2289](https://github.com/rsuite/rsuite/issues/2289)) ([324e90c](https://github.com/rsuite/rsuite/commit/324e90c8499adf58cb25083fd5c99fe98eb9ecba))
- **Tree:** fix dragNode has cyclic object ([#2281](https://github.com/rsuite/rsuite/issues/2281)) ([26cbaf2](https://github.com/rsuite/rsuite/commit/26cbaf2fd92ab562174e19cf55388c01fe22143a)), closes [#2268](https://github.com/rsuite/rsuite/issues/2268)

### Features

- **InputNumber:** support keyboard interaction ([#2294](https://github.com/rsuite/rsuite/issues/2294)) ([46993e2](https://github.com/rsuite/rsuite/commit/46993e235ca3d3ee8b6faa16a5fa11a8ed544e3b))
- **RangeSlider:** add `constraint` prop ([#2291](https://github.com/rsuite/rsuite/issues/2291)) ([a2d38a8](https://github.com/rsuite/rsuite/commit/a2d38a8efe4f85c28ce1f4ee79a89eda1e1cf7b0))

### Performance Improvements

- **styles:** simplify compound selectors over 4 levels ([#2282](https://github.com/rsuite/rsuite/issues/2282)) ([304e8da](https://github.com/rsuite/rsuite/commit/304e8da0c2057d148bbad36674aba33382439949))

## [5.4.4](https://github.com/rsuite/rsuite/compare/v5.4.3...v5.4.4) (2022-01-06)

### Bug Fixes

- **CheckTreePicker:** fix root node style incorrect ([#2279](https://github.com/rsuite/rsuite/issues/2279)) ([c09226e](https://github.com/rsuite/rsuite/commit/c09226e141f7881b11fe5594d802974f49e789a9))
- **DatePicker:** fix clear button not working ([#2273](https://github.com/rsuite/rsuite/issues/2273)) ([649362a](https://github.com/rsuite/rsuite/commit/649362aa697a292af28c5ec666e4337a7bd449c7))
- **Dropdown:** wrong submenu placement in RTL direction ([#2280](https://github.com/rsuite/rsuite/issues/2280)) ([c3735c3](https://github.com/rsuite/rsuite/commit/c3735c335d5a8ca6e9954af1e5b77c453b5bd4d2))
- **Navbar:** fix Whisper on Nav.Item within Navbar wrong positioning ([#2274](https://github.com/rsuite/rsuite/issues/2274)) ([bd0f5e3](https://github.com/rsuite/rsuite/commit/bd0f5e316e6bb910d9a41e43770b4d1a61528d9f)), closes [#2263](https://github.com/rsuite/rsuite/issues/2263)

## [5.4.3](https://github.com/rsuite/rsuite/compare/v5.4.2...v5.4.3) (2021-12-30)

### Bug Fixes

- **Drawer:** fix Drawer cannot be closed when backdrop is clicked ([#2259](https://github.com/rsuite/rsuite/issues/2259)) ([a49ee03](https://github.com/rsuite/rsuite/commit/a49ee03db33c11db30597221ca61ce6daa088c4b))
- **Picker:** add ref to PickerComponentProps ([#2261](https://github.com/rsuite/rsuite/issues/2261)) ([6e3e6c5](https://github.com/rsuite/rsuite/commit/6e3e6c57932af142dc1a74da6b7fffb57ae628ca))

## [5.4.2](https://github.com/rsuite/rsuite/compare/v5.4.1...v5.4.2) (2021-12-24)

### Bug Fixes

- **Affix:** fix unupdated position after window size change ([#2256](https://github.com/rsuite/rsuite/issues/2256)) ([61c7b27](https://github.com/rsuite/rsuite/commit/61c7b279f136ae44b9470046344cd6e163d02589))
- **Modal:** improve the mouse scrolling experience on Modal ([#2254](https://github.com/rsuite/rsuite/issues/2254)) ([137d57e](https://github.com/rsuite/rsuite/commit/137d57ef1e79ca0055b3af8d6cd5cff2a9c4ef55))
- **Navbar:** fix dropdown submenu throwing error ([#2250](https://github.com/rsuite/rsuite/issues/2250)) ([875130d](https://github.com/rsuite/rsuite/commit/875130d342f58e4078babe428913640e0b2faa04))

## [5.4.1](https://github.com/rsuite/rsuite/compare/v5.4.0...v5.4.1) (2021-12-23)

### Bug Fixes

- **Dropdown:** reduce padding in noCaret variant ([#2236](https://github.com/rsuite/rsuite/issues/2236)) ([682f883](https://github.com/rsuite/rsuite/commit/682f8830601d784452c10729a369ebe91057eddb))
- **Sidenav:** fix missing highlight on selected dropdown items ([#2216](https://github.com/rsuite/rsuite/issues/2216)) ([8f79d4a](https://github.com/rsuite/rsuite/commit/8f79d4a8aafb123f75f420a3adf3f680386aae68))
- **Sidenav:** prevent text wrapping when collapsing ([#2245](https://github.com/rsuite/rsuite/issues/2245)) ([4094233](https://github.com/rsuite/rsuite/commit/409423360a5226c8a0e11bbeecea0a4316c5c8e0))
- **Toggle:** dismiss uncontrolled input warning ([#2243](https://github.com/rsuite/rsuite/issues/2243)) ([c4737d5](https://github.com/rsuite/rsuite/commit/c4737d5af2fabf88312c7ee2b84d4e9139e743f1))

### Performance Improvements

- **Context:** use `useMemo` to memozie the values returned to the Context Provider ([#2244](https://github.com/rsuite/rsuite/issues/2244)) ([d25a719](https://github.com/rsuite/rsuite/commit/d25a71920d38bceefcf100248173121d54be8313))
- **DatePicker:** improve date grid a11y ([#2220](https://github.com/rsuite/rsuite/issues/2220)) ([655178e](https://github.com/rsuite/rsuite/commit/655178e05afe5e4b4619bda3a222dc753766e13b))

# [5.4.0](https://github.com/rsuite/rsuite/compare/v5.3.0...v5.4.0) (2021-12-17)

### Bug Fixes

- **DatePicker,DateRangePicker:** suppress depreated caretComponent warning ([#2233](https://github.com/rsuite/rsuite/issues/2233)) ([3a79d48](https://github.com/rsuite/rsuite/commit/3a79d486268ff31ad6a620dfc17165c3be259219))
- **DateRangePicker:** fix selecting ending date not working ([#2217](https://github.com/rsuite/rsuite/issues/2217)) ([2136aa3](https://github.com/rsuite/rsuite/commit/2136aa3327f914a910fb5805b2d11a036e0f6601))
- **Modal:** fix Modal focus being reset on re-rendering ([#2208](https://github.com/rsuite/rsuite/issues/2208)) ([a931b06](https://github.com/rsuite/rsuite/commit/a931b06942e7fc011ab77e70b105f5790a33e55b))
- **Nav:** fix incorrect Dropdown button background ([#2227](https://github.com/rsuite/rsuite/issues/2227)) ([421de83](https://github.com/rsuite/rsuite/commit/421de838ed13694254cc6a178d0369e12b666202))
- **Navbar:** fix icon style in Navbar items ([#2229](https://github.com/rsuite/rsuite/issues/2229)) ([560df61](https://github.com/rsuite/rsuite/commit/560df61a44c0338b153b2c09a50e946c207c684a))
- **Overlay:** overlay is rendered inside Modal by default ([#2230](https://github.com/rsuite/rsuite/issues/2230)) ([4fac628](https://github.com/rsuite/rsuite/commit/4fac628e23e41db097ec63c2ac348a7345f3ee31))
- **Radio:** fix unclickable without children ([#2190](https://github.com/rsuite/rsuite/issues/2190)) ([cef5946](https://github.com/rsuite/rsuite/commit/cef59463e281d6aa6b4b9576204d16eed58087c8))
- **SelectPicker:** fix onChange argument type ([#2193](https://github.com/rsuite/rsuite/issues/2193)) ([db0efa9](https://github.com/rsuite/rsuite/commit/db0efa94ad33de5d02bfd81e926cf622c40ecce7))
- **Steps:** step item not rendering number ([#2202](https://github.com/rsuite/rsuite/issues/2202)) ([413880b](https://github.com/rsuite/rsuite/commit/413880be99972d8a58d5f0a0c9b6b08017ad33a2))
- **Toggle:** fix Toggle is still clickable in loading state ([#2219](https://github.com/rsuite/rsuite/issues/2219)) ([e5661fd](https://github.com/rsuite/rsuite/commit/e5661fdb4ef659527ca97c2ea2231b4025e904d3))
- **Tree:** remove dragNode Element when drag node ([#2185](https://github.com/rsuite/rsuite/issues/2185)) ([#2237](https://github.com/rsuite/rsuite/issues/2237)) ([f6e959f](https://github.com/rsuite/rsuite/commit/f6e959f4aa24f0fa87b5fa1bbc6e1aa775fecd2b))

### Features

- **Stack:** add Stack support to the layout ([#2199](https://github.com/rsuite/rsuite/issues/2199)) ([1ac132e](https://github.com/rsuite/rsuite/commit/1ac132e0fc98a6739dee07d9e6281202530d80fa))

### Performance Improvements

- **CheckPicker:** infer value and onChange types from data prop ([#2228](https://github.com/rsuite/rsuite/issues/2228)) ([eb4f9a8](https://github.com/rsuite/rsuite/commit/eb4f9a8f4c84cf30b3521532d95f4dc2490d0699))

# [5.3.0](https://github.com/rsuite/rsuite/compare/5.2.4...5.3.0) (2021-12-10)

### Bug Fixes

- **Breadcrumb:** avoid separator key conflict with item key ([#2186](https://github.com/rsuite/rsuite/issues/2186)) ([428529a](https://github.com/rsuite/rsuite/commit/428529afb4f1c746ccebe06db3dd10438be8aa31))
- **Button:** apply size from parent ButtonGroup ([#2194](https://github.com/rsuite/rsuite/issues/2194)) ([85e9a21](https://github.com/rsuite/rsuite/commit/85e9a21d5cbc5c4fd4e92d591a8fe0cce5f43a15))
- **dts:** fix declaration errors in typescript strict mode ([#2130](https://github.com/rsuite/rsuite/issues/2130)) ([c31f080](https://github.com/rsuite/rsuite/commit/c31f080ea290d8420df77b406c29b89be44bef01))
- **Modal:** fix Modal not focused when opened ([#2180](https://github.com/rsuite/rsuite/issues/2180)) ([383ea12](https://github.com/rsuite/rsuite/commit/383ea129b315590700301ef823e7a24309e8237b))

### Features

- **AvatarGroup:** add support for AvatarGroup ([#2195](https://github.com/rsuite/rsuite/issues/2195)) ([2647bea](https://github.com/rsuite/rsuite/commit/2647bea5fcbe7148049ed5b6fa3118e86971572e))
- **FormControl:** allow explicit default value ([#2182](https://github.com/rsuite/rsuite/issues/2182)) ([691ee38](https://github.com/rsuite/rsuite/commit/691ee3807d567a379b3e82195d2b2d303449a466))
- **Tree,CheckTree:** support showIndentLine on <Tree> and <CheckTree> ([#2181](https://github.com/rsuite/rsuite/issues/2181)) ([720768e](https://github.com/rsuite/rsuite/commit/720768e7ac89752f11b5387f76b1e5e36c54221d))

## [5.2.4](https://github.com/rsuite/rsuite/compare/v5.2.3...v5.2.4) (2021-12-03)

### Bug Fixes

- **Carousel:** make onSelect prop optional ([#2170](https://github.com/rsuite/rsuite/issues/2170)) ([c4d7a63](https://github.com/rsuite/rsuite/commit/c4d7a63f4ec71ebb05d92b04bd26ebe547609dd0))
- **DateRangePicker:** fix DateRangePicker cannot switch am/pm ([#2171](https://github.com/rsuite/rsuite/issues/2171)) ([4c55db9](https://github.com/rsuite/rsuite/commit/4c55db9a3a96927589d4366ece1f329c011ccb0f))
- **pickers:** fix custom input in Picker cannot be focused ([#2176](https://github.com/rsuite/rsuite/issues/2176)) ([8a94bd6](https://github.com/rsuite/rsuite/commit/8a94bd6f9640995e017716fe69b68912c55e4c86))
- **Table:** fix the column of grouping cannot be centered ([#2168](https://github.com/rsuite/rsuite/issues/2168)) ([4fbe460](https://github.com/rsuite/rsuite/commit/4fbe460da4e9744eee8589233b305b7e15295e41))
- **tree:** expose methods for tree that can scroll the list ([#2178](https://github.com/rsuite/rsuite/issues/2178)) ([0a6f9ee](https://github.com/rsuite/rsuite/commit/0a6f9ee57ed33477472f2ad41c06d5242d3d62d5))

## [5.2.3](https://github.com/rsuite/rsuite/compare/v5.2.2...v5.2.3) (2021-11-26)

### Bug Fixes

- **useElementResize:** fix ResizeObserver being created repeatedly ([#2161](https://github.com/rsuite/rsuite/issues/2161)) ([32e2fa7](https://github.com/rsuite/rsuite/commit/32e2fa76a396945498f198d176b630ac09a4e20d))
- focus handler ([#2154](https://github.com/rsuite/rsuite/issues/2154)) ([3b17fbc](https://github.com/rsuite/rsuite/commit/3b17fbcae6da59ca58788c6b3aa60d79692dffa1))
- **TagPicker:** fix tag misplacement in plaintext mode ([#2152](https://github.com/rsuite/rsuite/issues/2152)) ([6d32c71](https://github.com/rsuite/rsuite/commit/6d32c714e1b9be743d57b3ae4f1622d006e0f52c))

### Performance Improvements

- **Menu:** prevent uneccesary re-render when mouseove on menuitems ([#2148](https://github.com/rsuite/rsuite/issues/2148)) ([dc06498](https://github.com/rsuite/rsuite/commit/dc0649822fd68964281f44c4ec2daf84953edc63))

## [5.2.2](https://github.com/rsuite/rsuite/compare/v5.2.1...v5.2.2) (2021-11-19)

### Bug Fixes

- **Dropdown:** dropdown item panel not rendering content ([#2128](https://github.com/rsuite/rsuite/issues/2128)) ([6631500](https://github.com/rsuite/rsuite/commit/6631500c74b0305026931a6379980fda9b587c6e))
- **IconButton:** primary icon button with text wrong bg ([#2141](https://github.com/rsuite/rsuite/issues/2141)) ([fde0cd4](https://github.com/rsuite/rsuite/commit/fde0cd4bce84c8f5d054d1722e9dfa61de49a7fa))
- **PanelGroup:** missing border for nested panels ([#2142](https://github.com/rsuite/rsuite/issues/2142)) ([225821f](https://github.com/rsuite/rsuite/commit/225821f2cdeba8637d70f4626f02ae1acd93eb24))

### Performance Improvements

- **resize:** improve the rerender performance of components after resize ([#2135](https://github.com/rsuite/rsuite/issues/2135)) ([71648ab](https://github.com/rsuite/rsuite/commit/71648ab061f7b4057675de2d0a6e08f2f8a70a61))

## [5.2.1](https://github.com/rsuite/rsuite/compare/v5.2.0...v5.2.1) (2021-11-12)

### Bug Fixes

- **CheckTree:** root node indeterminate state error ([#2124](https://github.com/rsuite/rsuite/issues/2124)) ([9dac0bc](https://github.com/rsuite/rsuite/commit/9dac0bc0e51b58b46aa85dac8a0348a9d73b2503))
- **Sidenav:** remove underline on hovered SidenavItem ([#2118](https://github.com/rsuite/rsuite/issues/2118)) ([56f7c3a](https://github.com/rsuite/rsuite/commit/56f7c3ad0f7ab31c7d5aef2fe2cde1661024f034))
- **Sidenav:** sidenav dropdown item accept as prop ([#2120](https://github.com/rsuite/rsuite/issues/2120)) ([5386999](https://github.com/rsuite/rsuite/commit/538699962dfd46faf41bb377833b0dcd06112039))

# [5.2.0](https://github.com/rsuite/rsuite/compare/v5.1.0...v5.2.0) (2021-11-05)

### Bug Fixes

- **Button:** Add button radius variable ([#2106](https://github.com/rsuite/rsuite/issues/2106)) ([63a61c4](https://github.com/rsuite/rsuite/commit/63a61c4eede3b22c91eef126b72fc1afb280a18e))
- **less:** palette function accepts rgb color ([#2107](https://github.com/rsuite/rsuite/issues/2107)) ([92c2dc5](https://github.com/rsuite/rsuite/commit/92c2dc5cf9273a26de189cee6e79b57740e17b49))
- can't perform a React state update on an unmounted component ([#2105](https://github.com/rsuite/rsuite/issues/2105)) ([44439af](https://github.com/rsuite/rsuite/commit/44439afdfdf481887a78fbd86f527e29eafb1a78))
- **dts:** remove redundant generics on SyntheticEvent ([#2099](https://github.com/rsuite/rsuite/issues/2099)) ([30ccd68](https://github.com/rsuite/rsuite/commit/30ccd685fb09092fb1fa693929cdba5d26967f96))
- **fa_IR:** trim long text of days to shorter ones ([#2076](https://github.com/rsuite/rsuite/issues/2076)) ([a893b82](https://github.com/rsuite/rsuite/commit/a893b82b835f9268a0053ede64565c96e6110095))
- **FormControl:** infer additional props from accepter ([#2084](https://github.com/rsuite/rsuite/issues/2084)) ([5d39fed](https://github.com/rsuite/rsuite/commit/5d39fed6e56418e85367df9dd5aeb7b49774380b))
- **Input:** correct value argument type for onChange callback ([#2087](https://github.com/rsuite/rsuite/issues/2087)) ([7a4ff02](https://github.com/rsuite/rsuite/commit/7a4ff02e1e01b40f2e2bffea105181500848d2c9))
- **Slider,RangeSlider:** reverse marks order in vertical orientation ([#2080](https://github.com/rsuite/rsuite/issues/2080)) ([07fdd09](https://github.com/rsuite/rsuite/commit/07fdd09bb504ea7e876e6e6b4da439a725f716a9))

# [5.1.0](https://github.com/rsuite/rsuite/compare/v5.0.3...v5.1.0) (2021-10-29)

### Bug Fixes

- **DatePicker:** fix DatePicker does not change value after pressing enter ([#2055](https://github.com/rsuite/rsuite/issues/2055)) ([c775444](https://github.com/rsuite/rsuite/commit/c7754445763f2553a3cc50e195b1dc347f774415))
- **DateRangePicker:** fix DateRangePicker does not change value after pressing enter ([#2056](https://github.com/rsuite/rsuite/issues/2056)) ([8e5db2e](https://github.com/rsuite/rsuite/commit/8e5db2e54d8e6ad79f7219dc69cd1f52f32a8295))
- **Dropdown.Item:** item inside Nav not pass "as" ([#2026](https://github.com/rsuite/rsuite/issues/2026)) ([34bfffd](https://github.com/rsuite/rsuite/commit/34bfffdbcd353753912b30b38523e3b62f430e98)), closes [#2025](https://github.com/rsuite/rsuite/issues/2025)
- **Dropdown.Item:** render custom element inside li ([#2044](https://github.com/rsuite/rsuite/issues/2044)) ([a2e8a00](https://github.com/rsuite/rsuite/commit/a2e8a00c94f77028ed489a65f970264eeb9551ea))
- **Overlay:** fix position offset inside container ([#2049](https://github.com/rsuite/rsuite/issues/2049)) ([c27b19e](https://github.com/rsuite/rsuite/commit/c27b19e9c9ec0191ccf5d36d9efe6b176b0b6d84))
- **Toggle:** improve a11y (keyboard focusable + keyboard events) ([#2032](https://github.com/rsuite/rsuite/issues/2032)) ([9fdfd52](https://github.com/rsuite/rsuite/commit/9fdfd52e1eab3ad3e93569112e33ad3490335fbd))

### Features

- **locales:** Created fa_IR locale to add support of Persian language in Rsuite locals ([#2061](https://github.com/rsuite/rsuite/issues/2061)) ([14e5946](https://github.com/rsuite/rsuite/commit/14e59466cfd285ec1098d67280338a7df1ef8f5f))
- **MaskedInput:** added support for MaskedInput to replace `react-text-mask` ([#2054](https://github.com/rsuite/rsuite/issues/2054)) ([496416a](https://github.com/rsuite/rsuite/commit/496416a2e4b32362252ef70f5c4e40f785ecf5be))
- **Toggle:** add loading prop ([#2031](https://github.com/rsuite/rsuite/issues/2031)) ([28778de](https://github.com/rsuite/rsuite/commit/28778de0af0495a1bb68479bf3c679413255ce7b))

## [5.0.3](https://github.com/rsuite/rsuite/compare/v5.0.2...v5.0.3) (2021-10-22)

### Bug Fixes

- **Navbar:** fix item hover style ([#2010](https://github.com/rsuite/rsuite/issues/2010)) ([8e6e13f](https://github.com/rsuite/rsuite/commit/8e6e13f3eafc1b0cd89900943e351fac817b8598))
- **pickers:** add missing default appearance ([#2004](https://github.com/rsuite/rsuite/issues/2004)) ([e0bbc45](https://github.com/rsuite/rsuite/commit/e0bbc45cfe5a1cc9978dd8e1d988294764ec321a))
- **Uploader:** fix disabled button opacity ([#2009](https://github.com/rsuite/rsuite/issues/2009)) ([a02aae7](https://github.com/rsuite/rsuite/commit/a02aae7395521a1246082e410811fe0e71b02a03))

<a name="5.0.2"></a>

## [5.0.2](https://github.com/rsuite/rsuite/compare/v5.0.1...v5.0.2) (2021-10-15)

### Bug Fixes

- **date-range-picker:** fix date formatting error when typing ([#1991](https://github.com/rsuite/rsuite/issues/1991)) ([f65f7f8](https://github.com/rsuite/rsuite/commit/f65f7f8))
- **pickers:** clean button overlapping with value ([#1984](https://github.com/rsuite/rsuite/issues/1984)) ([ec127dc](https://github.com/rsuite/rsuite/commit/ec127dc))
- **table:** fix the typescript type definition of Table ([#1998](https://github.com/rsuite/rsuite/issues/1998)) ([8d00b8d](https://github.com/rsuite/rsuite/commit/8d00b8d)), closes [#1958](https://github.com/rsuite/rsuite/issues/1958)
- **tag-picker:** update TagPicker trigger props declare. ([#1996](https://github.com/rsuite/rsuite/issues/1996)) ([27da381](https://github.com/rsuite/rsuite/commit/27da381))
- **uploader:** improve thumbnail rendering on file list ([#1997](https://github.com/rsuite/rsuite/issues/1997)) ([68344d7](https://github.com/rsuite/rsuite/commit/68344d7))

<a name="5.0.1"></a>

## [5.0.1](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.8...v5.0.1) (2021-10-09)

### Bug Fixes

- **check-picker:** fix `onClean` should not be triggered on Input ([#1947](https://github.com/rsuite/rsuite/issues/1947)) ([5cb1685](https://github.com/rsuite/rsuite/commit/5cb1685))
- **col:** fix the missing className prefix in Col ([#1967](https://github.com/rsuite/rsuite/issues/1967)) ([fc0e0af](https://github.com/rsuite/rsuite/commit/fc0e0af))
- **DateRangePicker:** support time selection ([#1882](https://github.com/rsuite/rsuite/issues/1882)) ([59779ef](https://github.com/rsuite/rsuite/commit/59779ef))
- **picker:** [TS] fix the missing definition of `size` in Pickers ([#1926](https://github.com/rsuite/rsuite/issues/1926)) ([6497698](https://github.com/rsuite/rsuite/commit/6497698))
- **pickers:** fix `listProps` not working on picker ([#1962](https://github.com/rsuite/rsuite/issues/1962)) ([956ef12](https://github.com/rsuite/rsuite/commit/956ef12))
- **sidenav:** accent dropdown icon w/ active item ([#1913](https://github.com/rsuite/rsuite/issues/1913)) ([efa389c](https://github.com/rsuite/rsuite/commit/efa389c))
- **sidenav:** Dropdown not expanding inside Sidenav ([#1956](https://github.com/rsuite/rsuite/issues/1956)) ([07723cd](https://github.com/rsuite/rsuite/commit/07723cd))
- **sidenav:** fix nav item not activated in collapsed sidenav ([#1918](https://github.com/rsuite/rsuite/issues/1918)) ([59fe040](https://github.com/rsuite/rsuite/commit/59fe040))
- **slider:** fix missing `input` in Slider and RangeSlider ([#1968](https://github.com/rsuite/rsuite/issues/1968)) ([a35bd2b](https://github.com/rsuite/rsuite/commit/a35bd2b))

<a name="5.0.0"></a>

# [5.0.0](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.8...v5.0.0) (2021-09-26)

### Bug Fixes

- **DateRangePicker:** support time selection ([#1882](https://github.com/rsuite/rsuite/issues/1882)) ([59779ef](https://github.com/rsuite/rsuite/commit/59779ef))
- **picker:** [TS] fix the missing definition of `size` in Pickers ([#1926](https://github.com/rsuite/rsuite/issues/1926)) ([6497698](https://github.com/rsuite/rsuite/commit/6497698))
- **sidenav:** accent dropdown icon w/ active item ([#1913](https://github.com/rsuite/rsuite/issues/1913)) ([efa389c](https://github.com/rsuite/rsuite/commit/efa389c))
- **sidenav:** fix nav item not activated in collapsed sidenav ([#1918](https://github.com/rsuite/rsuite/issues/1918)) ([59fe040](https://github.com/rsuite/rsuite/commit/59fe040))

<a name="5.0.0-beta.8"></a>

# [5.0.0-beta.8](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.7...v5.0.0-beta.8) (2021-09-17)

### Bug Fixes

- **date-picker:** fix calendar header wrapping ([#1907](https://github.com/rsuite/rsuite/issues/1907)) ([4cfc3af](https://github.com/rsuite/rsuite/commit/4cfc3af))
- **navbar,dropdown:** unexpected focus submenu ([#1908](https://github.com/rsuite/rsuite/issues/1908)) ([697aa3e](https://github.com/rsuite/rsuite/commit/697aa3e))

### Features

- **table:** support `rowSpan` on `<Table.Column>` ([#1909](https://github.com/rsuite/rsuite/issues/1909)) ([34a3a1f](https://github.com/rsuite/rsuite/commit/34a3a1f))

<a name="5.0.0-beta.7"></a>

# [5.0.0-beta.7](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.6...v5.0.0-beta.7) (2021-09-09)

### Bug Fixes

- **tag-input:** adjust default value of the trigger to `Enter` ([#1886](https://github.com/rsuite/rsuite/issues/1886)) ([4405b6b](https://github.com/rsuite/rsuite/commit/4405b6b))

### Features

- **carousel:** support `onSelect`, `onSlideEnd`, `onSlideStart` on `<Carousel>` ([#1889](https://github.com/rsuite/rsuite/issues/1889)) ([91e7b98](https://github.com/rsuite/rsuite/commit/91e7b98))
- **date-picker:** remove `inline` on `<DatePicker>` ([#1892](https://github.com/rsuite/rsuite/issues/1892)) ([83a77df](https://github.com/rsuite/rsuite/commit/83a77df))
- **theme:** added support for high-contrast theme ([#1828](https://github.com/rsuite/rsuite/pull/1828))

<a name="5.0.0-beta.6"></a>

# [5.0.0-beta.6](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.5...v5.0.0-beta.6) (2021-09-06)

### Bug Fixes

- **drawer:** fix incorrect styles in drawer title and drawer actions ([#1874](https://github.com/rsuite/rsuite/issues/1874)) ([747a5f1](https://github.com/rsuite/rsuite/commit/747a5f1))
- **list-item:** fix unable to set HTML event on List.Item ([#1863](https://github.com/rsuite/rsuite/issues/1863)) ([07578a2](https://github.com/rsuite/rsuite/commit/07578a2)), closes [#1859](https://github.com/rsuite/rsuite/issues/1859)
- **sidenav:** fix incorrect indent before dropdown toggle ([#1856](https://github.com/rsuite/rsuite/issues/1856)) ([048da73](https://github.com/rsuite/rsuite/commit/048da73))

### Features

- **tag-input:** add support for TagInput ([#1848](https://github.com/rsuite/rsuite/issues/1848)) ([eb66602](https://github.com/rsuite/rsuite/commit/eb66602)), closes [#1265](https://github.com/rsuite/rsuite/issues/1265)
- **tag-picker:** support `trigger` on `<TagPicker>` ([#1847](https://github.com/rsuite/rsuite/issues/1847)) ([8ace065](https://github.com/rsuite/rsuite/commit/8ace065))
- **uploader:** support `disableMultipart` on `<Uploader>` ([#1862](https://github.com/rsuite/rsuite/issues/1862)) ([a6d7dcb](https://github.com/rsuite/rsuite/commit/a6d7dcb))

<a name="5.0.0-beta.5"></a>

# [5.0.0-beta.5](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.4...v5.0.0-beta.5) (2021-08-18)

### Bug Fixes

- **date-picker:** fix DatePicker cannot be used as controlled ([#1844](https://github.com/rsuite/rsuite/issues/1844)) ([3d6c035](https://github.com/rsuite/rsuite/commit/3d6c035)), closes [#1842](https://github.com/rsuite/rsuite/issues/1842)

### Features

- **dropdown:** support `renderToggle` on `<Dropdown>` ([#1843](https://github.com/rsuite/rsuite/issues/1843)) ([99c1925](https://github.com/rsuite/rsuite/commit/99c1925))

<a name="5.0.0-beta.4"></a>

# [5.0.0-beta.4](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.3...v5.0.0-beta.4) (2021-08-16)

### Bug Fixes

- **date-picker:** fix AM/PM display incorrect issue when switching hours ([#1823](https://github.com/rsuite/rsuite/issues/1823)) ([110715e](https://github.com/rsuite/rsuite/commit/110715e))
- **dropdown-menu:** remove unrecognizable activeKey from dom ([#1827](https://github.com/rsuite/rsuite/issues/1827)) ([d578b5b](https://github.com/rsuite/rsuite/commit/d578b5b))
- **locales:** fix the undefined problem of Locale ([#1834](https://github.com/rsuite/rsuite/issues/1834)) ([bf35a23](https://github.com/rsuite/rsuite/commit/bf35a23))
- refactor(styles): change body background in light theme (#1840)

### BREAKING CHANGES

- build(deps): bump rsuite-table from 5.0.0-alpha.5 to 5.0.0-alpha.8 (#1836)
- chore: use proxyDirectories to build esm/cjs (#1830)

<a name="5.0.0-beta.3"></a>

# [5.0.0-beta.3](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.2...v5.0.0-beta.3) (2021-08-08)

### Bug Fixes

- **pagination:** export type definition of `PaginationProps` ([#1817](https://github.com/rsuite/rsuite/issues/1817)) ([80c7d9e](https://github.com/rsuite/rsuite/commit/80c7d9e))
- **sidenav:** trigger `<Nav onSelect>` on click `<Nav.Item>` ([#1815](https://github.com/rsuite/rsuite/issues/1815)) ([cae171d](https://github.com/rsuite/rsuite/commit/cae171d))

<a name="5.0.0-beta.2"></a>

# [5.0.0-beta.2](https://github.com/rsuite/rsuite/compare/v5.0.0-beta.1...v5.0.0-beta.2) (2021-08-03)

### Bug Fixes

- **check-picker:** fix unable to clear value when pressing `Backspace` ([#1812](https://github.com/rsuite/rsuite/issues/1812)) ([1534174](https://github.com/rsuite/rsuite/commit/1534174))
- **nav:** trigger `onSelect` on `<Nav>` when clicking `<Nav.Item>` ([#1797](https://github.com/rsuite/rsuite/issues/1797)) ([3fc99c4](https://github.com/rsuite/rsuite/commit/3fc99c4))
- CheckTreePicker and TreePicker search problems ([#1808](https://github.com/rsuite/rsuite/issues/1808)) ([2c5e651](https://github.com/rsuite/rsuite/commit/2c5e651)), closes [#1577](https://github.com/rsuite/rsuite/issues/1577)
- **message:** improve close icon style ([#1807](https://github.com/rsuite/rsuite/issues/1807)) ([4d1bf3f](https://github.com/rsuite/rsuite/commit/4d1bf3f))
- **typescript:** export props of all components ([#1803](https://github.com/rsuite/rsuite/issues/1803)) ([a4edeba](https://github.com/rsuite/rsuite/commit/a4edeba))

### Features

- **CustomProvider:** support `theme` on `<CustomProvider>` ([#1798](https://github.com/rsuite/rsuite/issues/1798)) ([cb5794c](https://github.com/rsuite/rsuite/commit/cb5794c))

<a name="5.0.0-beta.1"></a>

# [5.0.0-beta.1](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.9...v5.0.0-beta.1) (2021-07-23)

### Bug Fixes

- **calendar:** fix the date on the calendar as controlled and remove timezone ([#1781](https://github.com/rsuite/rsuite/issues/1781)) ([70e323d](https://github.com/rsuite/rsuite/commit/70e323d))
- **cascader:** adjust the rendering status of async loaded child nodes ([#1764](https://github.com/rsuite/rsuite/issues/1764)) ([ae41a18](https://github.com/rsuite/rsuite/commit/ae41a18))
- **cascader:** fix data not controlled on MultiCascader ([#1747](https://github.com/rsuite/rsuite/issues/1747)) ([593adc5](https://github.com/rsuite/rsuite/commit/593adc5))
- **check-tree-picker:** onChange does't return the correct value ([#1743](https://github.com/rsuite/rsuite/issues/1743)) ([b34a919](https://github.com/rsuite/rsuite/commit/b34a919))
- **dropdown-item:** close <Dropdown> inside <Navbar> on click its item ([#1791](https://github.com/rsuite/rsuite/issues/1791)) ([cc01a34](https://github.com/rsuite/rsuite/commit/cc01a34))
- **navigation:** improve accessibility of nav components ([#1792](https://github.com/rsuite/rsuite/issues/1792)) ([45468bd](https://github.com/rsuite/rsuite/commit/45468bd))
- **picker:** picker should not focus when it is disabled ([#1782](https://github.com/rsuite/rsuite/issues/1782)) ([6640c58](https://github.com/rsuite/rsuite/commit/6640c58))
- **picker:** update the position after the overlay size is changed ([#1780](https://github.com/rsuite/rsuite/issues/1780)) ([6366c36](https://github.com/rsuite/rsuite/commit/6366c36))
- **styles:** enable dark mode by default ([#1776](https://github.com/rsuite/rsuite/issues/1776)) ([13420e3](https://github.com/rsuite/rsuite/commit/13420e3))
- add less plugins to output lib dir, fix [#1767](https://github.com/rsuite/rsuite/issues/1767) ([#1770](https://github.com/rsuite/rsuite/issues/1770)) ([7a83699](https://github.com/rsuite/rsuite/commit/7a83699))
- **use-controlled:** value doest't change when controlledValue changed ([#1742](https://github.com/rsuite/rsuite/issues/1742)) ([682eb2b](https://github.com/rsuite/rsuite/commit/682eb2b))

<a name="5.0.0-alpha.9"></a>

# [5.0.0-alpha.9](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.8...v5.0.0-alpha.9) (2021-06-15)

### Bug Fixes

- **cascader:** fix search result row height ([#1717](https://github.com/rsuite/rsuite/issues/1717)) ([94696eb](https://github.com/rsuite/rsuite/commit/94696eb))
- **date-picker:** correct the style of non-current month dates ([#1732](https://github.com/rsuite/rsuite/issues/1732)) ([90058f8](https://github.com/rsuite/rsuite/commit/90058f8))
- **datepicker:** fix gap between date cells ([#1726](https://github.com/rsuite/rsuite/issues/1726)) ([03a7604](https://github.com/rsuite/rsuite/commit/03a7604))
- **input-picker:** fix extra height in disabled state ([#1718](https://github.com/rsuite/rsuite/issues/1718)) ([dd56301](https://github.com/rsuite/rsuite/commit/dd56301))
- **input-picker:** fix InputPicker value not rendering when plaintext ([#1690](https://github.com/rsuite/rsuite/issues/1690)) ([fcb5995](https://github.com/rsuite/rsuite/commit/fcb5995))
- **keyboard-event:** replace the deprecated keyCode with key ([#1691](https://github.com/rsuite/rsuite/issues/1691)) ([2f7a6d1](https://github.com/rsuite/rsuite/commit/2f7a6d1))
- **list:** wrong position when auto scrolling ([#1687](https://github.com/rsuite/rsuite/issues/1687)) ([6b387f0](https://github.com/rsuite/rsuite/commit/6b387f0))
- **modal:** remove extra margins in full-size modal ([#1699](https://github.com/rsuite/rsuite/issues/1699)) ([d231cc6](https://github.com/rsuite/rsuite/commit/d231cc6))
- **navbar:** fix navbar dropdown hover text color ([#1719](https://github.com/rsuite/rsuite/issues/1719)) ([44230fd](https://github.com/rsuite/rsuite/commit/44230fd))
- **position:** fix the exception that occurs when overlay is unmount ([#1714](https://github.com/rsuite/rsuite/issues/1714)) ([9a29a5a](https://github.com/rsuite/rsuite/commit/9a29a5a))
- **radio:** fix checked radio style in disabled state ([#1708](https://github.com/rsuite/rsuite/issues/1708)) ([62a4dc7](https://github.com/rsuite/rsuite/commit/62a4dc7))
- **radio:** fix disabled radio hover style ([#1709](https://github.com/rsuite/rsuite/issues/1709)) ([cdf0d09](https://github.com/rsuite/rsuite/commit/cdf0d09))
- **timeline:** fix incorrect spacing around axis in alternate alignment ([#1731](https://github.com/rsuite/rsuite/issues/1731)) ([b0e2f18](https://github.com/rsuite/rsuite/commit/b0e2f18))
- MultiCascader data cann't be controlled ([#1696](https://github.com/rsuite/rsuite/issues/1696)) ([7f9b03b](https://github.com/rsuite/rsuite/commit/7f9b03b))

### Features

- **nav:** improve NavItem visibility ([#1702](https://github.com/rsuite/rsuite/issues/1702)) ([8cb0b82](https://github.com/rsuite/rsuite/commit/8cb0b82))
- **pickers:** improve picker keyboard interaction experience ([#1700](https://github.com/rsuite/rsuite/issues/1700)) ([b3bde80](https://github.com/rsuite/rsuite/commit/b3bde80))
- Rewrite style system (#1476) ([19ed855](https://github.com/rsuite/rsuite/commit/19ed855)), closes [#1476](https://github.com/rsuite/rsuite/issues/1476) [#1671](https://github.com/rsuite/rsuite/issues/1671) [#1679](https://github.com/rsuite/rsuite/issues/1679)

### BREAKING CHANGES

- deprecate Navbar.Header and Navbar.Body
- refactor(styles): re-org Sidenav styles
- refactor(styles): re-org Pagination styles
- refactor(styles): re-org Button styles
- refactor(styles): re-org InputGroup styles
- refactor(styles): re-org InputNumber styles
- refactor(styles): re-org AutoComplete styles
- refactor(styles): re-org SelectPicker styles
- refactor(styles): re-org CheckPicker styles
- refactor(styles): re-org Checkbox styles
- refactor(styles): re-org Radio styles
- refactor(styles): re-org Toggle styles
- refactor(styles): re-org Rate styles
- refactor(styles): re-org Slider styles
- refactor(styles): re-org Uploader styles
- refactor(styles): re-org Cascader styles
- refactor(styles): remove iconfont related styles
- refactor(styles): re-org Avatar styles
- refactor(styles): re-org Badge styles
- refactor(styles): re-org Tag styles
- refactor(styles): re-org Carousel styles
- refactor(styles): re-org ButtonToolbar styles
- refactor(styles): re-org ButtonGroup styles
- refactor(styles): re-org Animation styles
- refactor(styles): re-org Panel styles
- refactor(styles): re-org List styles
- refactor(styles): re-org Timeline styles
- refactor(styles): re-org Table styles
- refactor(styles): re-org CloseButton styles
- refactor(styles): re-org Modal and Drawer styles
- refactor(styles): re-org IconButton styles
- refactor(styles): re-org Form styles
- refactor(styles): re-org toaster styles
- refactor(styles): re-org Message styles
- docs(theme): add rs-theme- classes on container element
- refactor(theme): use rs-theme- classes to determine color theme
- refactor(styles): remove unused files in Ripple
- refactor(styles): re-org CheckTree and CheckTreePicker styles
- refactor(styles): re-org Picker styles
- refactor(styles): re-org Tree and TreePicker styles
- refactor(styles): re-org InputPicker styles
- refactor(styles): re-org Calendar styles
- refactor(styles): re-org DatePicker and DateRangePicker styles
- refactor(styles): unify theme styles
- refactor(button): alter default button background color
- refactor(styles): remove unused less variables
- docs: use unified themes
- refactor(styles): split themes mixins
- refactor(styles): split non-common keyframes
- refactor(styles): re-order imports
- refactor(styles): remove unused global utility classes
- refactor(styles): remove unused common mixins
- refactor(styles): remove keyframe.less
- refactor(styles): rename core.less to common
- refactor(styles): transform palette hack mixin into less plugin
- refactor(styles): fix palette plugin output type
- test(styles): fix button style tests
- test(styles): fix missing imports that prevent tests running
- fix(styles): fix primary border color in default theme
- chore(deps): re-generate package-lock.json
- style: prettier format
- chore(deps): downgrade eslint-plugin-react to 7.20.3 to avoid issues
- style: upgrade stylelint and resolve violations
- refactor(styles): simplify ripple related styles
- refactor(styles): re-org button styles in different states
- refactor(styles): re-org icon-button in different states
- refactor(styles): remove .rs-btn-default class
- refactor(styles): re-org Button sizing mixins
- refactor(styles): re-org Ripple styles and mixins
- docs: fix docs.css missing from docs app
- chore(stylelint): add stylelint-config-prettier
- docs: add docs for less plugins
- refactor(styles): re-org primary and secondary palettes
- refactor(styles): remove unused color variables in dark theme
- refactor(styles): split theme palette and functional colors
- refactor(styles): remove direct use of gray/highlight levels
- refactor(styles): fix icon button in primary appearance
- refactor(styles): remove redundant color variables from dark theme
- build: omit javascriptEnabled option for less
- chore: eslint ignore less plugins
- refactor(styles): prefix css variables with rs instead of rs-color
- refactor(styles): re-org color themes inclusion
- refactor(styles): re-org variable declarations
- docs(button): fix custom combination example
- refactor(nav): remove margins between nav items
- refactor(styles): replace stateful color variables with semantic colors
- refactor(styles): separate color variables for light/dark modes
- feat(styles): add variable for toggling dark mode inclusion
- fix(styles): fix styling test failures
- test(autocomplete): fix test failures
- test(cascader): fix test failures due to dom change
- test(inputpicker): fix test failures due to dom change
- test(picker): fix test failures due to dom change
- test(selectpicker): fix test failures due to dom change
- chore: skip checking style existence
- build: fix build scripts for stylesheets
- fix(styles): fix incorrect casing in importing paths
- docs: fix button heights in toolbar
- docs: fix button style in codeview toolbar
- fix(styles): remove dark mode styles when enable-dark-mode is false
- docs: add docs for dark mode
- docs(customize): replace deprecated variables with new ones
- fix(message): re-org Message styles
- deprecate Drawer.Footer in favor of new Drawer.Actions
- feat(drawer): improve close button placement and appearance
- feat(drawer): deprecate Drawer.Footer replaced with Drawer.Actions
- fix(drawer): fix drawer body overflow height
- style(drawer): remove redundant comments
- fix(drawer): remove classes incorrectly assigned to close button
- fix(radiogroup): fix radio group picker width

<a name="5.0.0-alpha.8"></a>

# [5.0.0-alpha.8](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.7...v5.0.0-alpha.8) (2021-05-17)

### Bug Fixes

- **cascader:** fix `childrenKey` property not work when searching([#1568](https://github.com/rsuite/rsuite/issues/1568)) ([#1666](https://github.com/rsuite/rsuite/issues/1666)) ([c5f3fc6](https://github.com/rsuite/rsuite/commit/c5f3fc6))
- **drawer:** remove height on Drawer body ([#1683](https://github.com/rsuite/rsuite/issues/1683)) ([759fd69](https://github.com/rsuite/rsuite/commit/759fd69))
- **input-picker:** fix InputPicker can select values in readOnly mode ([#1674](https://github.com/rsuite/rsuite/issues/1674)) ([7e5d02b](https://github.com/rsuite/rsuite/commit/7e5d02b))
- treePicker & CheckTreePicker ([ec88694](https://github.com/rsuite/rsuite/commit/ec88694))

### Features

- **cascader:** add `layer` parameter in `renderMenu` callback ([#1681](https://github.com/rsuite/rsuite/issues/1681)) ([1c6b1e0](https://github.com/rsuite/rsuite/commit/1c6b1e0))
- **nav-item:** support `tooltip` on NavItem ([#1680](https://github.com/rsuite/rsuite/issues/1680)) ([f25d569](https://github.com/rsuite/rsuite/commit/f25d569))
- **Whisper:** added support for trigger prop value `contextMenu` on `Whisper` ([491be3a](https://github.com/rsuite/rsuite/commit/491be3a))

<a name="5.0.0-alpha.7"></a>

# [5.0.0-alpha.7](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.6...v5.0.0-alpha.7) (2021-05-11)

### Bug Fixes

- **lgtm:** fix vulnerabilities in static code scanning using lgtm ([#1651](https://github.com/rsuite/rsuite/issues/1651)) ([77d04a7](https://github.com/rsuite/rsuite/commit/77d04a7))
- **overlay:** update the overlay to the correct position ([#1654](https://github.com/rsuite/rsuite/issues/1654)) ([8148b7a](https://github.com/rsuite/rsuite/commit/8148b7a))
- **typescript:** fix incorrect definition of Typescript ([#1656](https://github.com/rsuite/rsuite/issues/1656)) ([87c5f3d](https://github.com/rsuite/rsuite/commit/87c5f3d))

### Features

- **inputpicker:** support onCreate on InputPicker and TagPicker ([#1645](https://github.com/rsuite/rsuite/issues/1645)) ([5f33fe9](https://github.com/rsuite/rsuite/commit/5f33fe9))
- **multi-cascader:** support onCheck on MultiCascader ([#1648](https://github.com/rsuite/rsuite/issues/1648)) ([0088a29](https://github.com/rsuite/rsuite/commit/0088a29))

<a name="5.0.0-alpha.6"></a>

# [5.0.0-alpha.6](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.5...v5.0.0-alpha.6) (2021-05-07)

### Bug Fixes

- **cascader:** fixed the option not re-rendering after data update ([#1608](https://github.com/rsuite/rsuite/issues/1608)) ([6a83064](https://github.com/rsuite/rsuite/commit/6a83064)), closes [#1599](https://github.com/rsuite/rsuite/issues/1599)
- **customprovider:** integrate the locale of date-fns in CustomProvider ([#1637](https://github.com/rsuite/rsuite/issues/1637)) ([1817430](https://github.com/rsuite/rsuite/commit/1817430)), closes [#1636](https://github.com/rsuite/rsuite/issues/1636)
- **pickers:** Fixed the inability to pass the type check when the `labelKey` and `valueKey` of the pickers are changed. ([#1589](https://github.com/rsuite/rsuite/issues/1589)) ([ed1bea6](https://github.com/rsuite/rsuite/commit/ed1bea6))
- **typescript:** fix incorrect definition of Typescript ([#1640](https://github.com/rsuite/rsuite/issues/1640)) ([73bbe88](https://github.com/rsuite/rsuite/commit/73bbe88)), closes [#1633](https://github.com/rsuite/rsuite/issues/1633)

### Features

- **hooks:** add the useWillUnmount hook and apply it to Modal ([#1607](https://github.com/rsuite/rsuite/issues/1607)) ([73e3948](https://github.com/rsuite/rsuite/commit/73e3948))

<a name="5.0.0-alpha.5"></a>

# [5.0.0-alpha.5](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.4...v5.0.0-alpha.5) (2021-03-19)

### Bug Fixes

- **daterangepicker:** modify the `character` prop to be optional ([#1518](https://github.com/rsuite/rsuite/issues/1518)) ([6b77e52](https://github.com/rsuite/rsuite/commit/6b77e52))
- **inputpicker:** fix the input does not work when focused by keyboard ([b2dc612](https://github.com/rsuite/rsuite/commit/b2dc612))
- **inputpicker:** inputPicker should clear search keywords when closed ([679edc3](https://github.com/rsuite/rsuite/commit/679edc3))
- **modal:** fix input is not allowed to input text in Modal ([#1579](https://github.com/rsuite/rsuite/issues/1579)) ([f4ec497](https://github.com/rsuite/rsuite/commit/f4ec497)), closes [#1570](https://github.com/rsuite/rsuite/issues/1570)
- **overlaytrigger:** rename `child` to `root` in OverlayTrigger instance ([05ce0ec](https://github.com/rsuite/rsuite/commit/05ce0ec))
- **pickers:** picker should not be interactive during animation exit ([1f657b7](https://github.com/rsuite/rsuite/commit/1f657b7))
- **rangeslider:** fix RangeSlider style problem ([cfaa93e](https://github.com/rsuite/rsuite/commit/cfaa93e))
- **table:** change `Table` locale prop to optional ([#1581](https://github.com/rsuite/rsuite/issues/1581)) ([ca15531](https://github.com/rsuite/rsuite/commit/ca15531))
- **tree:** fix `spin` icon does not display when Tree is loaded async ([#1535](https://github.com/rsuite/rsuite/issues/1535)) ([0294a43](https://github.com/rsuite/rsuite/commit/0294a43))
- **uploader:** fixed the status icon not showing during upload ([#1547](https://github.com/rsuite/rsuite/issues/1547)) ([8f24c69](https://github.com/rsuite/rsuite/commit/8f24c69))

### Features

- **form:** support for data verification of complex object structure ([#1558](https://github.com/rsuite/rsuite/issues/1558)) ([d5b23f4](https://github.com/rsuite/rsuite/commit/d5b23f4))
- **pagination:** added for support `layout` on Pagination ([#1533](https://github.com/rsuite/rsuite/issues/1533)) ([9713cd5](https://github.com/rsuite/rsuite/commit/9713cd5))
- **whisper:** support `onClose` on the `speaker` prop of Whisper ([4ecad64](https://github.com/rsuite/rsuite/commit/4ecad64))

<a name="5.0.0-alpha.4"></a>

# [5.0.0-alpha.4](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.3...v5.0.0-alpha.4) (2021-02-23)

### Bug Fixes

- **babel:** fix the problem that commonjs import `default` is undefined ([#1514](https://github.com/rsuite/rsuite/issues/1514)) ([9855f54](https://github.com/rsuite/rsuite/commit/9855f54))
- **daterangepicker:** delete duplicate type definitions ([#1513](https://github.com/rsuite/rsuite/issues/1513)) ([26c9283](https://github.com/rsuite/rsuite/commit/26c9283))
- **input-group:** fix InputGroup size misalignment when inside ([#1474](https://github.com/rsuite/rsuite/issues/1474)) ([ca0f90f](https://github.com/rsuite/rsuite/commit/ca0f90f))
- **radio:** fixed the color of Radio in active state ([#1475](https://github.com/rsuite/rsuite/issues/1475)) ([bc9a3dd](https://github.com/rsuite/rsuite/commit/bc9a3dd))
- **rtl:** fixed the docs not work when using `rtl` ([#1501](https://github.com/rsuite/rsuite/issues/1501)) ([9ee8ce3](https://github.com/rsuite/rsuite/commit/9ee8ce3))
- **table:** fixed unhandled scroll bar width when Cell is fixed on right ([#1486](https://github.com/rsuite/rsuite/issues/1486)) ([7e9ccc1](https://github.com/rsuite/rsuite/commit/7e9ccc1))
- **typos:** fix typos in the docs ([#1502](https://github.com/rsuite/rsuite/issues/1502)) ([15e9170](https://github.com/rsuite/rsuite/commit/15e9170))

### Features

- **locales:** add translations for German ([#1495](https://github.com/rsuite/rsuite/issues/1495)) ([b71ed41](https://github.com/rsuite/rsuite/commit/b71ed41))
- **uploader:** support file async check on Uploader ([#1509](https://github.com/rsuite/rsuite/issues/1509)) ([4726c5a](https://github.com/rsuite/rsuite/commit/4726c5a))

<a name="5.0.0-alpha.3"></a>

# [5.0.0-alpha.3](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.2...v5.0.0-alpha.3) (2021-01-23)

### Bug Fixes

- **divider:** set aria-orientation on Divider ([#1457](https://github.com/rsuite/rsuite/issues/1457)) ([fe46e4d](https://github.com/rsuite/rsuite/commit/fe46e4d))
- **picker:** fixed the non-unique key in the Picker option when groupBy ([#1460](https://github.com/rsuite/rsuite/issues/1460)) ([5ca0fa0](https://github.com/rsuite/rsuite/commit/5ca0fa0))
- **tree:** fix className of Tree and CheckTree ([#1456](https://github.com/rsuite/rsuite/issues/1456)) ([de79cbf](https://github.com/rsuite/rsuite/commit/de79cbf))
- **whisper:** fix overlay jittering when the cursor is hovered ([#1459](https://github.com/rsuite/rsuite/issues/1459)) ([d29e785](https://github.com/rsuite/rsuite/commit/d29e785))

<a name="5.0.0-alpha.2"></a>

# [5.0.0-alpha.2](https://github.com/rsuite/rsuite/compare/v5.0.0-alpha.1...v5.0.0-alpha.2) (2021-01-05)

### Bug Fixes

- **calendar:** fix the issue of disabled date styles in Calendar ([#1424](https://github.com/rsuite/rsuite/issues/1424)) ([13b64be](https://github.com/rsuite/rsuite/commit/13b64be))
- **cascader:** fix icon style in Cascader ([#1426](https://github.com/rsuite/rsuite/issues/1426)) ([3076eb8](https://github.com/rsuite/rsuite/commit/3076eb8))
- **check-picker:** fixed the group icon not showing in CheckPicker ([#1422](https://github.com/rsuite/rsuite/issues/1422)) ([082a648](https://github.com/rsuite/rsuite/commit/082a648))
- **formcontrol:** improve the accessibility of FormControl ([#1433](https://github.com/rsuite/rsuite/issues/1433)) ([c7855d4](https://github.com/rsuite/rsuite/commit/c7855d4))
- **pickers:** fix the missing value on input in picker ([#1430](https://github.com/rsuite/rsuite/issues/1430)) ([7d06531](https://github.com/rsuite/rsuite/commit/7d06531))
- **rate:** fix the half-ratings style of Rate ([#1423](https://github.com/rsuite/rsuite/issues/1423)) ([f064f48](https://github.com/rsuite/rsuite/commit/f064f48))
- **select-picker:** fix SelectPicker not re-render when data is updated ([#1421](https://github.com/rsuite/rsuite/issues/1421)) ([0eb2a65](https://github.com/rsuite/rsuite/commit/0eb2a65))
- **uploader:** fix the style of Uploader in plaintext ([#1427](https://github.com/rsuite/rsuite/issues/1427)) ([dfb98ee](https://github.com/rsuite/rsuite/commit/dfb98ee))

### Performance Improvements

- **date-fns:** use `date-fns-tz` instead of `date-fns-timezone` ([#1413](https://github.com/rsuite/rsuite/issues/1413)) ([1747d27](https://github.com/rsuite/rsuite/commit/1747d27))

<a name="5.0.0-alpha.1"></a>

# [5.0.0-alpha.1](https://github.com/rsuite/rsuite/compare/4.8.0...5.0.0-alpha.1) (2020-12-24)

### Bug Fixes

- **breadcrumb:** update locales of Breadcrumb ([30a1550](https://github.com/rsuite/rsuite/commit/30a1550))
- **checkpicker:** fix value error problem when keyboard interaction ([#1332](https://github.com/rsuite/rsuite/issues/1332)) ([ea5f91c](https://github.com/rsuite/rsuite/commit/ea5f91c))
- **daterangepicker:** fix the issue of DateRangePicker closing delay ([9fc40ee](https://github.com/rsuite/rsuite/commit/9fc40ee))
- **DateRangePicker:** 修复选择时间时面板收起的问题 & prettier code ([#1330](https://github.com/rsuite/rsuite/issues/1330)) ([afd0b7e](https://github.com/rsuite/rsuite/commit/afd0b7e))
- **form-controls:** adjust the style of the plain text of form controls ([#1405](https://github.com/rsuite/rsuite/issues/1405)) ([cca782f](https://github.com/rsuite/rsuite/commit/cca782f))
- **icon:** adjust the dependent icons in the component ([70fdddb](https://github.com/rsuite/rsuite/commit/70fdddb))
- **icon:** fix icon-related style issues ([b0ebaba](https://github.com/rsuite/rsuite/commit/b0ebaba))
- **icon-button:** fix IconButton style error when disabled ([ecbf4e5](https://github.com/rsuite/rsuite/commit/ecbf4e5))
- **input-group:** adjust button elements in input-group ([#1406](https://github.com/rsuite/rsuite/issues/1406)) ([14acbab](https://github.com/rsuite/rsuite/commit/14acbab))
- **list:** improve List ([0eb95b0](https://github.com/rsuite/rsuite/commit/0eb95b0))
- **modal:** fix ModalManager uncontrollable ([#1335](https://github.com/rsuite/rsuite/issues/1335)) ([26834da](https://github.com/rsuite/rsuite/commit/26834da))
- **pickers:** fixed picker will select children when set invalid value ([#1336](https://github.com/rsuite/rsuite/issues/1336)) ([dd99886](https://github.com/rsuite/rsuite/commit/dd99886))
- **popover:** set shadow to popover component ([#1360](https://github.com/rsuite/rsuite/issues/1360)) ([94c6851](https://github.com/rsuite/rsuite/commit/94c6851))
- **tagpicker:** fix tagpicker rendervalue styles ([#1376](https://github.com/rsuite/rsuite/issues/1376)) ([4fdf09d](https://github.com/rsuite/rsuite/commit/4fdf09d))
- **tree:** revese Left and Right Arrow event in rtl ([#1337](https://github.com/rsuite/rsuite/issues/1337)) ([cfae655](https://github.com/rsuite/rsuite/commit/cfae655))
- **tree-picker:** fixed the icon problem in TreePicker ([#1382](https://github.com/rsuite/rsuite/issues/1382)) ([ba78f3c](https://github.com/rsuite/rsuite/commit/ba78f3c))
- **v4:** sync the bugs fixed in v4 ([#1380](https://github.com/rsuite/rsuite/issues/1380)) ([9053982](https://github.com/rsuite/rsuite/commit/9053982))
- 🐛 修复非法传递到 DOM 节点上的问题 ([#1268](https://github.com/rsuite/rsuite/issues/1268)) ([aedaae1](https://github.com/rsuite/rsuite/commit/aedaae1))
- 🐛 修正 Rate 笔误 ([#1230](https://github.com/rsuite/rsuite/issues/1230)) ([83d1cee](https://github.com/rsuite/rsuite/commit/83d1cee))
- fix typescript type definition ([#1366](https://github.com/rsuite/rsuite/issues/1366)) ([9bfb445](https://github.com/rsuite/rsuite/commit/9bfb445))
- fixed document sidenav icon ([3881e44](https://github.com/rsuite/rsuite/commit/3881e44))
- form method cleanErrorForFiled renamed into cleanErrorForField ([#1236](https://github.com/rsuite/rsuite/issues/1236)) ([1aaaab0](https://github.com/rsuite/rsuite/commit/1aaaab0))
- ISO week format on calendar panel ([666bc2b](https://github.com/rsuite/rsuite/commit/666bc2b))
- **tag-picker:** fix tag picker styles issue ([#1167](https://github.com/rsuite/rsuite/issues/1167)) ([4f4e88b](https://github.com/rsuite/rsuite/commit/4f4e88b))

### Features

- **slider:** support `onChangeCommitted` on Slider and RangeSlider ([#1404](https://github.com/rsuite/rsuite/issues/1404)) ([fca8c86](https://github.com/rsuite/rsuite/commit/fca8c86)), closes [#1321](https://github.com/rsuite/rsuite/issues/1321)
- support focus on form controls ([#1391](https://github.com/rsuite/rsuite/issues/1391)) ([820a31b](https://github.com/rsuite/rsuite/commit/820a31b))
- **cascader:** support keyboard interaction on Cascader ([#1339](https://github.com/rsuite/rsuite/issues/1339)) ([252afdf](https://github.com/rsuite/rsuite/commit/252afdf))
- **daterangepicker:** support input and mask on DateRangePicker and DatePicker ([#1368](https://github.com/rsuite/rsuite/issues/1368)) ([4b47e09](https://github.com/rsuite/rsuite/commit/4b47e09))
- **icons:** update icon list ([#1363](https://github.com/rsuite/rsuite/issues/1363)) ([a9b584f](https://github.com/rsuite/rsuite/commit/a9b584f))
- `rootPrefix` supports compound parameters ([268aef9](https://github.com/rsuite/rsuite/commit/268aef9))
- replace icon component ([#1359](https://github.com/rsuite/rsuite/issues/1359)) ([6ad16b9](https://github.com/rsuite/rsuite/commit/6ad16b9))
- **datepicker:** support keyboard input on DatePicker ([#1350](https://github.com/rsuite/rsuite/issues/1350)) ([36e3268](https://github.com/rsuite/rsuite/commit/36e3268))
- **form:** support plaintext on all form controls ([#1328](https://github.com/rsuite/rsuite/issues/1328)) ([a26dfc6](https://github.com/rsuite/rsuite/commit/a26dfc6))
- **slider:** support keyboard interaction on Slider and RangeSlider ([#1324](https://github.com/rsuite/rsuite/issues/1324)) ([8b1f6cf](https://github.com/rsuite/rsuite/commit/8b1f6cf))
- improve the accessibility of Nav ([278696e](https://github.com/rsuite/rsuite/commit/278696e))
- **toaster:** add support for toaster ([#1246](https://github.com/rsuite/rsuite/issues/1246)) ([41b86db](https://github.com/rsuite/rsuite/commit/41b86db))

### Performance Improvements

- improve accessibility with ARIA ([#1323](https://github.com/rsuite/rsuite/issues/1323)) ([24b4379](https://github.com/rsuite/rsuite/commit/24b4379))
- remove deprecated code ([1ef99b1](https://github.com/rsuite/rsuite/commit/1ef99b1))
- **selectpicker:** adjust the dependency of Picker ([1fc5f24](https://github.com/rsuite/rsuite/commit/1fc5f24))
