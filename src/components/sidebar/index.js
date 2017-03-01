import { h, render, Component } from 'preact';
 
const items = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];
 
render (
  <Sidebar content={items}>
    <YourAppContent />
  </Sidebar>
, document.findElementById("render-target"))