
from pytube import YouTube

yt = YouTube('https://www.youtube.com/watch?v=GOHdTwKdT14')
stream = yt.streams.get_highest_resolution()
stream.download(output_path='Nedbank/backend/downloads', filename='video.mp4')