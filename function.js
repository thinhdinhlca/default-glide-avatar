window.function = function (fullName, email, imageLink, background, color, size, bold) {

  // Default values for the parameters if they're not provided
  fullName = fullName?.value ?? "";    // Get fullName from input or default to an empty string
  email = email?.value ?? "";          // Get email from input or default to an empty string
  imageLink = imageLink?.value ?? "";  // Get imageLink from input or default to an empty string
  background = background?.value ?? "291755"; // Default background color
  color = color?.value ?? "ffffff";    // Default font color (white)
  size = size?.value ?? "256";         // Default avatar size
  bold = bold?.value ?? "true";        // Default bold text

  // Directly return the image link if it's available
  if (imageLink) {
    return imageLink;
  }
  
  // Base URL for UI Avatars
  const baseURL = "https://ui-avatars.com/api/";
  
  // Attempt to split the full name into first and last names, fall back to the full name if not possible
  let name = fullName || email;
  name = encodeURIComponent(name);  // URL encode the name to ensure it's safe for the URL
  
  // Construct the query parameters
  const params = [
    `background=${background}`,        // Custom background color
    `color=${color}`,                  // Custom font color
    `size=${size}`,                    // Avatar size
    `font-size=0.33`,                  // Font size (relative to the avatar size)
    `rounded=true`,                    // Rounded corners for the avatar
    `bold=${bold}`,                    // Bold text
    `name=${name}`                     // The encoded name to display on the avatar
  ].join('&');
  
  // Return the complete URL for UI Avatars if no image link is provided
  return `${baseURL}?${params}`;
};
