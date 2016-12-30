/*
 Defines the interrogative interface by which we access _media devices_ that encode or decode _streaming media_ such as cameras, microphones and capture cards. 
 
 ## background notes
 
 Streaming media devices may be hardware, software or any combination of the two, and are dependent on system-exclusive frameworks. Then the specific arrangememnt and configuration (media graph) of audio, video and control channels is virtually unique to a given system. This all adds up to a huge development and user effort to manage the changes and depenencies and there are no good existing solutions to leverage I can see. 
 Our response to this dilema is to turn the problem on it's head, and preclude the existence of any of those issues in the first place. 
 To do this, we break out our generic programming toolkit, and declare that all streaming media devices are defined _only_ in terms of _constraints_ on their _capabilities_ and _features_, rather than explicit configuration.  The user of the _broadcast package_ need only have devices that meet the defined requireents in order to ensure compatability.  It is then the users _explicit_ responsibility to release control of the device, and acknowledge a potential change to the _media graph_.
 All change to the _production media graph_
*/

interface MediaDevice {

}

interface MediaDeviceConstraint {

}
