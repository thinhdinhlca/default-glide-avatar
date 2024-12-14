function generateAvatar(fullName, email, imageLink, background, color, size, bold, fontSize) {
    // Default values for customization
    background = background ?? '291755';  // Default background color
    color = color ?? 'ffffff';             // Default text color (white)
    size = size ?? 256;                    // Default size (256px)
    bold = (bold === undefined || bold === null) ? true : bold;  // Default bold text (true)
    fontSize = fontSize ?? 0.33;           // Default font size

    // Directly return the image link if it's available
    if (imageLink && imageLink.trim() !== "") {
        return imageLink;
    }

    // Base URL for UI Avatars
    const baseURL = "https://ui-avatars.com/api/";

    // Attempt to split the full name into first and last names, fall back to the full name if not possible
    let name = fullName && fullName.trim() ? fullName : email;  // Use full name if available, else fallback to email
    name = encodeURIComponent(name);  // URL encode the name to ensure it's safe for the URL

    // Construct the query parameters
    const params = [
        `background=${background}`,     // Custom background color
        `color=${color}`,               // Custom font color
        `size=${size}`,                 // Avatar size
        `font-size=${fontSize}`,        // Font size (relative to the avatar size)
        `rounded=true`,                 // Rounded corners for the avatar
        `bold=${bold}`,                 // Bold text
        `name=${name}`                  // The encoded name to display on the avatar
    ].join('&');

    // Return the complete URL for UI Avatars if no image link is provided
    return `${baseURL}?${params}`;
}
