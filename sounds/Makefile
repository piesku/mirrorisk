M4As := $(wildcard *.m4a)
MP3s := $(M4As:%.m4a=%.mp3)

all: $(MP3s)

%.mp3: %.m4a
	@echo "$< → $@"
	@ffmpeg -i $< -c:v copy -c:a libmp3lame -q:a 4 $@
