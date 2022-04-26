import pyautogui
import keyboard
import time
import win32api ,win32con

from scrypt import click

# pyautogui.displayMousePosition()

 # X:  859 Y:  408 RGB: (0,  0,  0) Rojo 1
# X:  1211 Y:  403 RGB: ( 0, 0,  0) Verde 2
# X:  1242 Y:  571 RGB: (0, 0,   0) Amarillo 3
# X:  1006 Y:  571 RGB: ( 0, 0, 0) Azul 4 

def click(x,y):
    win32api.SetCursorPos((x,y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN,0,0)
    time.sleep(0.5)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP,0,0)

print(pyautogui.pixel(859, 408))

# def colorChequeo(x):
#     if(pyautogui.pixel(859, 408)[0])

# x = 0

# while 1:
#     if keyboard.is_pressed('e'):
#             if x == 1:
#                 click(859, 563)
            
#             if x == 2:
#                 click(1211, 563)

#             if x == 3:
#                 click(1242, 563)

#             if x == 4:
#                 click(1006, 563)

