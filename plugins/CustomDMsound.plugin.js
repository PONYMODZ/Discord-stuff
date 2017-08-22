//META{"name":"CustomDMsound"}*//
'use strict';
function CustomDMsound()
	{
	const
		_=this;
	var
		obs;
	_.getName=()=>'Custom DM sound';
	_.getDescription=()=>'Creates a sound of your choice when you receive a Direct Message. To change the sound edit the link in CustomDMsound.plugin.js Hope u like it';
	_.getVersion=()=>'1.0';
	_.getAuthor=()=>'PONYMODZ';
	_.load=function(){};
	_.start=function()
		{
		const
			D=document,
			audio=D.createElement('audio');
		audio.src='https://www.myinstants.com/media/sounds/yay_1.mp3'; //Change this to any sound you like by default YAY
		obs=new MutationObserver
			(
			function(m)
				{
				if(m[0].addedNodes.length)
					{
					audio.play();
					}
				}
			);
		obs.observe(D.getElementsByClassName('dms')[0],{childList:1});
		};
	_.stop=function()
		{
		obs.disconnect();
		};
	_.getSettingsPanel=function()
		{
		return '';
		};
	}