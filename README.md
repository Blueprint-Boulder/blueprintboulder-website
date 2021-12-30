# Blueprint Boulder's Website

Hosted on [BlueprintBoulder.org](https://blueprintboulder.org). Built by [ItsMichal](https://michal.us). Template by [Smakosh](https://github.com/smakosh/gatsby-portfolio-dev?utm_source=BlueprintBoulder)

## Getting Started with Development

1. Clone repository or download as .zip
2. Create a file in `blueprintboulder-website/` (or the root of the cloned directory) named `.env.development`. Ask Michal or the admin channel in slack for information on how to get the most current values. See `.env.development.template` for an example if making your own website.
3. Run `npm i`
4. Run `npm start`
5. A login menu should pop-up. Select `Login with GitHub` with the Enter/Return and Arrow keys. You'll need the credentials for the `blueprintboulder` account, or your own.
6. Once you've successfully logged in, enter `Y` when asked to `Set up and develop`
7. Choose the default scope (`blueprintboulder`) and confirm with enter.
8. Enter `y` to link to an existing project
9. Enter the name `blueprint-website` for the name of the project
10. The local development server should now be available to you at https://localhost:8080
    - It should also automatically update with any changes.

## Development Notes

- Use Gatsby.js/React docs for more on how to develop this site.
- Pages go in `src/pages`, so if you're creating a new page, it goes there. 
    - The URL will match with the name of the file, i.e. `src/pages/bios.js` = https://blueprintboulder.org/bios. 
- React components in `src/components`. These will be used in Pages, see `src/pages/index.js` as an example of how to use components/pages together.
- Currently image assets and such are either in `src/assets` or in `public/`
- `src/data/config.js` contains a lot of global variables for use in react components
- Don't worry about `api/`, that's only for Formium really.
- `Original_README.md` might also help, as well as the original [Smakosh repo](https://github.com/smakosh/gatsby-portfolio-dev?utm_source=BlueprintBoulder)
- Contact Michal with any other questions

## To-Do

- Complete Member profiles
- Add Non-profit section/showcase
- Add blog section/update feed
- Connect socials to website
- List website on search engines
- Optimize images for page-load speed