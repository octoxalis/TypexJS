/**
 * UI events
 */
void function ()
{
  DOM_loader__v( '[data--="menu_iframe"]', () =>
  {
    //> DOM_rootVar__v( '--c_hue_base', 100 )
//> Menu inline notes sup element click handler
//> to show/hide the note
    window.addEventListener('load', () =>
      {
        document.querySelector( '[data--="menu_list"]' )
          .addEventListener('click', inlineNote__v )
      } )

//> Menu order click handler
//> to sort posts by reverse order
    document.querySelector( '[data--="menu_order"]' )
      .addEventListener('click', click_o =>
      {
        const menu_e = click_o.target.closest('menu')
        if ( menu_e ) DOM_listReverse__v( '[data--="menu_list"]' )
      } )

//> adjust menu height + position
    menuPosition__v()
  } )


//> register service worker
  if ( 'serviceWorker' in navigator ) window
    .addEventListener( 'load', service__v( '{{U_o.url_s}}{{U_o.SERVICE_PATH_s}}' ) )

//> Page link click+hover handler
//> to show menu or go to another page
  const linkNav_e = document.querySelector( '[data--="link_nav"]' )
  if ( linkNav_e != null )
  {
    linkNav_e.addEventListener('click', click_o => 
    {
      const link_e = click_o.target.closest('LI')
      if ( link_e === null ) return
      let link_s = link_e.getAttribute( 'data--' )
      /*
      if ( link_s === 'link_menu' ) return void menu__v()
      //: previous or next tip
      const http_s = linkURL__s( link_s )
      if ( http_s ) window.location = http_s
      */
      switch ( link_s )
      {
        case ( 'link_menu' ) : return void menu__v()
        case ( 'link_top' ) :
        case ( 'link_bottom' ) : return void DOM_scroll__v( link_s === 'link_bottom' )
        case ( 'link_previous' ) :
        case ( 'link_next' ) :
        {
          const http_s = linkURL__s( link_s )
          if ( http_s ) window.location = http_s
        }
      }
    } )

    document.querySelectorAll( '[data--="link_nav"] > li' )
      .forEach( buttonLink_e =>
      {
        switch ( buttonLink_e.getAttribute( 'data--' ) )
        {
          case 'link_top' :
          case 'link_bottom' :
          case 'link_menu' : return
        }
        [ 'mouseenter', 'mouseleave' ]
          .forEach( event_s => buttonLink_e.addEventListener( event_s,
            mouse_o => linkNear__v( event_s, mouse_o.currentTarget ) ) )
      } )
  }

//> Article inline notes sup element click handler
//> to show/hide notes
  document.querySelector( '[data--="article"]' )
    .addEventListener('click', inlineNote__v )

//> Comments visibility click handler
//> to show/hide comments
  const visibility_e = document.querySelector( '[data--="comments_visibility"]' )
  if ( visibility_e ) visibility_e.addEventListener('click', click_o => comments__v() )

//> Easter egg for developers who read sources
//> change UI base color
  const header_e = document.querySelector( '[data--="header"]' )
  header_e.addEventListener('click', click_o =>
    {
      const atX_n = click_o.clientX - header_e.getBoundingClientRect().left
      const width_n = header_e.offsetWidth
      const hue_n = ( atX_n / width_n ) * 360
      DOM_rootVar__v( '--c_hue_base', ~~hue_n )
    } )

} ()
