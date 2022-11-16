<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'qrcodejj' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'BM%o_m!]|`Nc%8.3>Bi2t[`.$j9d8Rl2|#NZ>==-|Ub-P#yp3&eeDy4rGW?%)%<L' );
define( 'SECURE_AUTH_KEY',  '6DA,Avm<[;?,^Qb.%6/ciVsW*3G`fR8AX@C!)uXvDleP}#KA~TYS7_hn&87Jy_cw' );
define( 'LOGGED_IN_KEY',    '%[gc hu:H[)%@,Dq|$mHc_ST=ydzE}J`pY7C-l+8BSlVM.v+{7MhdUOI:Vi.czW$' );
define( 'NONCE_KEY',        '*mU,B!AQykijQ(tADwI?[8%0]zR8DOI/e0PZ_/]FV;PbQ0+K!JMywnkP$6E1~E:Q' );
define( 'AUTH_SALT',        '#f>V4>N6.L:X^L[1p,rG!{Wjm,I7:+61=%NQ  l_S=soBZaL?F}VSE6o!h=$` 5j' );
define( 'SECURE_AUTH_SALT', '8WpPbJ.wzYCPYw/J[Sd4-tb&S/^Pi#y@B!&gLRK$9k=XfWPXA)!0p2tW-p&~BHCz' );
define( 'LOGGED_IN_SALT',   'SuGo1N KbN/jA,^?;/zQwo0mMQU;O2X)[&P,9n(rq::/4CSj6$2zJE&_66|Lj4On' );
define( 'NONCE_SALT',       'xt$Tef,=dNQ!4XsZB;<G{rd|Ut)qB<0J]TI6M+ge)O_{OU*H5:-*:lvM/eT>l_7D' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'star_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
