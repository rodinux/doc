---
title: Установка YunoHost
template: docs
taxonomy:
    category: docs
never_cache_twig: true
twig_first: true
process:
    markdown: true
    twig: true
page-toc:
  active: true
  depth: 2
routes:
  default: '/install'
  aliases: 
    - '/install_iso'
    - '/install_on_vps'
    - '/install_manually'
    - '/install_on_raspberry'
    - '/install_on_arm_board'
    - '/install_on_debian'
    - '/install_on_virtualbox'
    - '/plug_and_boot'
    - '/burn_or_copy_iso'
    - '/boot_and_graphical_install'
    - '/postinstall'
    - '/hardware'
---
{% set image_type = 'YunoHost' %}
{% set arm, at_home, regular, rpi345, rpi012, show_legacy_arm_menu, arm_sup, arm_unsup, vps, vps_debian, vps_ynh, virtualbox, wsl, internetcube = false, false, false, false, false, false, false, false, false, false, false, false, false, false %}
{% set hardware = uri.param('hardware')  %}

{% if hardware == 'regular' %}
  {% set regular = true %}
{% elseif hardware == 'internetcube' %}
  {% set arm, arm_sup, internetcube = true, true, true %}
  {% set image_type = 'Internet Cube' %}
  {% set show_legacy_arm_menu = true %}
{% elseif hardware == 'rpi345' %}
  {% set arm, rpi345 = true, true %}
{% elseif hardware == 'rpi012' %}
  {% set arm, arm_unsup, rpi012 = true, true, true %}
  {% set hardware = '' %}
{% elseif hardware == 'arm_sup' %}
  {% set arm, arm_sup = true, true %}
  {% set show_legacy_arm_menu = true %}
{% elseif hardware == 'arm' %}
  {% set arm, arm_unsup = true, true %}
  {% set image_type = 'Armbian' %}
{% elseif hardware == 'arm_unsup' %}
  {% set arm, arm_unsup = true, true %}
  {% set show_legacy_arm_menu = true %}
  {% set image_type = 'Armbian' %}
{% elseif hardware == 'vps_debian' %}
  {% set vps, vps_debian = true, true %}
{% elseif hardware == 'vps_ynh' %}
  {% set vps, vps_ynh = true, true %}
{% elseif hardware == 'virtualbox' %}
  {% set at_home, virtualbox = true, true %}
{% elseif hardware == 'wsl' %}
  {% set wsl = true %}
{% endif %}

{% if arm or regular %}
  {% set at_home = true %}
{% endif %}

Выберите оборудование, на которое вы хотите установить YunoHost :
[div class="flex-container"]

[div class="flex-child hardware{%if virtualbox %} active{% endif %}"]
[[figure caption="VirtualBox"]![](image://virtualbox.png?height=75)[/figure]](/install/hardware:virtualbox)
[/div]

[div class="flex-child hardware{%if rpi012 or rpi345 %} active{% endif %}"]
[[figure caption="Raspberry Pi"]![](image://raspberrypi.png?height=75)[/figure]](/install/hardware:rpi345)
[/div]

[div class="flex-child hardware{%if arm_sup or (arm_unsup and not rpi012) or internetcube %} active{% endif %}"]
[[figure caption="ARM платы"]![](image://olinuxino.png?height=75)[/figure]](/install/hardware:arm)
[/div]

[div class="flex-child hardware{%if regular %} active{% endif %}"]
[[figure caption="Обычный компьютер"]![](image://computer.png?height=75)[/figure]](/install/hardware:regular)
[/div]

[div class="flex-child hardware{%if wsl %} active{% endif %}"]
[[figure caption="WSL"]![](image://wsl.png?height=75)[/figure]](/install/hardware:wsl)
[/div]

[div class="flex-child hardware{%if vps_debian or vps_ynh %} active{% endif %}"]
[[figure caption="Удалённый сервер"]![](image://vps.png?height=75)[/figure]](/install/hardware:vps_debian)
[/div]

[/div]
[div class="flex-container pt-2"]

{% if rpi012 or rpi345 %}
[div class="flex-child hardware{%if rpi345 %} active{% endif %}"]
[[figure caption="Raspberry Pi 3, 4 или 5"]![](image://raspberrypi.png?height=50)[/figure]](/install/hardware:rpi345)
[/div]

[div class="flex-child hardware{%if rpi012 %} active{% endif %}"]
[[figure caption="Raspberry Pi 0, 1 или 2"]![](image://rpi1.png?height=50)[/figure]](/install/hardware:rpi012)
[/div]

{% elseif show_legacy_arm_menu %}

[div class="flex-child hardware{%if internetcube %} active{% endif %}"]
[[figure caption="Internet cube с VPN"]![](image://internetcube.png?height=50)[/figure]](/install/hardware:internetcube)
[/div]

[div class="flex-child hardware{%if arm_sup and not internetcube %} active{% endif %}"]
[[figure caption="Olinuxino lime1&2 или Orange Pi PC+"]![](image://olinuxino.png?height=50)[/figure]](/install/hardware:arm_sup)
[/div]

[div class="flex-child hardware{%if arm_unsup %} active{% endif %}"]
[[figure caption="Другие платы"]![](image://odroidhc4.png?height=50)[/figure]](/install/hardware:arm_unsup)
[/div]
{% elseif vps_debian or vps_ynh %}

[div class="flex-child hardware{%if vps_debian %} active{% endif %}"]
[[figure caption="VPS или выделенный сервер с Debian 12"]![](image://debian-logo.png?height=50)[/figure]](/install/hardware:vps_debian)
[/div]

[div class="flex-child hardware{%if vps_ynh %} active{% endif %}"]
[[figure caption="VPS или выделенный сервер с предустановленным YunoHost"]![](image://logo.png?height=50)[/figure]](/install/hardware:vps_ynh)
[/div]

{% endif %}

[/div]

{% if rpi012 %}
!! Support for Raspberry Pi 0, 1 and 2 was unfortunately dropped since Debian 12 Bookworm. We suggest you migrate to a more modern Raspberry Pi model, supported by Bookworm.
{% endif %}

{% if hardware != '' %}

{% if wsl %}
!! Эта настройка в основном предназначена для локального тестирования продвинутыми пользователями. Из-за ограничений на стороне WSL (в частности, изменение IP-адреса) самостоятельный хостинг с него может быть сложным и здесь описываться не будет.
{% endif %}

## [fa=list-alt /] Предварительные условия

{% if regular %}

- x86-совместимое оборудование, предназначенное для YunoHost: ноутбук, неттоп, нетбук, настольный компьютер с 512 МБ оперативной памяти и емкостью 16 ГБ (не менее)
{% elseif rpi345 %}
- Raspberry Pi 3, 4 or 5
{% elseif internetcube %}
- Orange Pi PC+ или Olinuxino Lime 1 или 2
- VPN с выделенным общедоступным IP-адресом и файлом `.cube`
{% elseif arm_sup %}
- Orange Pi PC+ или Olinuxino Lime 1 или 2
{% elseif arm_unsup %}
- Плата ARM с объемом оперативной памяти не менее 512 МБ
{% elseif vps_debian %}
- Выделенный или виртуальный частный сервер с Debian 12 (Bookworm) <small>(с **kernel >= 6.1**)</small> предустановленный, 512 МБ оперативной памяти и емкость 16 ГБ (не менее)
{% elseif vps_ynh %}
- Выделенный или виртуальный частный сервер с предустановленным YunoHost, 512 МБ оперативной памяти и емкостью не менее 16 ГБ
{% elseif virtualbox %}
- Компьютер x86 с [установленным VirtualBox](https://www.virtualbox.org/wiki/Downloads) и достаточный объем оперативной памяти, чтобы иметь возможность запускать небольшую виртуальную машину с 1024 МБ оперативной памяти и емкостью 8 ГБ (как минимум).
{% endif %}
{% if arm %}
*Источник питания (либо адаптер, либо кабель microUSB) для вашей платы;
- Карта microSD: емкость 16 ГБ (не менее), [класса "A1"](https://club.dns-shop.ru/blog/t-127-kartyi-pamyati/59683-klassyi-skorosti-kart-pamyati-kak-razobratsya-i-chto-brat/#sub_Klass__skorosti__dlya__rabotyi__s__prilojeniyami) настоятельно рекомендуется (например, [эта SanDisk A1 карта](https://www.dns-shop.ru/product/dd976fc32e66ed20/karta-pamati-sandisk-ultra-microsdxc-64-gb-sdsqua4-064g-gn6mn/));
{% endif %}
{% if regular %}
- USB-накопитель емкостью не менее 1 ГБ или стандартный чистый компакт-диск
{% endif %}
{% if wsl %}
- Windows 10 и выше
- Права администратора
- Подсистема Windows для Linux, устанавливаемая из *Включение или отключение компонентов Windows*
- *Рекомендуется:* Приложение Windows Terminal (предварительный просмотр), установленное из магазина Microsoft Store. Намного лучше, чем стандартный терминал, поскольку он предлагает быстрые пути к дистрибутивам WSL.
{% endif %}
{% if at_home %}
- [хороший Интернет-провайдер](/isp), предпочтительно с хорошей и неограниченной восходящей полосой пропускания
{% if not virtualbox %}
- Кабель Ethernet (RJ-45) для подключения вашего сервера к маршрутизатору.
{% endif %}
- Компьютер, чтобы прочитать это руководство, прошейте изображение и получите доступ к вашему серверу.
{% else %}
- Компьютер или смартфон, чтобы прочитать это руководство и получить доступ к вашему серверу.
{% endif %}

{% if virtualbox %}
! Примечание: Установка YunoHost в VirtualBox обычно предназначена для тестирования или разработки. Запускать реальный сервер в долгосрочной перспективе неудобно, потому что машина, на которой он установлен, вероятно, не будет работать круглосуточно, а также потому, что Virtualbox добавляет дополнительный уровень сложности при подключении машины к Интернету.
{% endif %}

{% if wsl %}

## Вступление

WSL is a nice feature of Windows 10, making Linux pseudo-distributions available through command line. Let's say pseudo, because even though they are not really like virtual machines, they rely on virtualization capacities that make their integration with Windows almost seamless.
Docker for Windows can now rely on WSL instead of Hyper-V, for example.

! Bear in mind, this setup itself is *not* a container of any kind. If something breaks, there is no rollback capability.
! You may need to delete the Debian distro altogether and restore it whole.

## Install Debian 12

Let's install YunoHost into its own distro, not altering the default one. In a PowerShell terminal:

```bash
# Let's go in your home directory and prepare the working directories
cd ~
mkdir -p WSL\YunoHost
# Download the Debian appx package and unzip it
curl.exe -L -o debian.zip https://aka.ms/wsl-debian-gnulinux
Expand-Archive .\debian.zip -DestinationPath .\debian
# Import the Debian base into a new distro
wsl --import YunoHost ~\WSL\YunoHost ~\debian\install.tar.gz --version 2
# Cleanup
rmdir .\debian -R
```

You can now access it: run `wsl.exe -d YunoHost`

It is under Debian 9 Stretch, so let's upgrade it:

```bash
# In WSL
sudo sed -i 's/stretch/bookworm/g' /etc/apt/sources.list`
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade
```

## Prevent WSL from tweaking configuration files

Edit `/etc/wsl.conf` and put the following code in it:

```text
[network]
generateHosts = false
generateResolvConf = false
```

## Force the use of iptables-legacy

Somehow the YunoHost post-installation does not like `nf_tables`, the new software replacing `iptables`.
We can still explicitely use the good ol' `iptables` though:

```bash
# In WSL
sudo update-alternatives --set iptables /usr/sbin/iptables-legacy
sudo update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
```

## Install Systemd

Debian on WSL does not have `systemd`, a service configuration software.
This is a key element for YunoHost, and for any decent Debian distro (seriously MS, what the heck). Let's install it:

1. Install dotNET runtime:

    ```bash
    # In WSL
    wget https://packages.microsoft.com/config/debian/12/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
    sudo dpkg -i packages-microsoft-prod.deb
    sudo apt update
    sudo apt install -y apt-transport-https
    sudo apt update
    sudo apt install -y dotnet-sdk-3.1
    ```

2. Install [Genie](https://github.com/arkane-systems/genie):

    ```bash
    # In WSL
    # Add their repository
    echo "deb [trusted=yes] https://wsl-translinux.arkane-systems.net/apt/ /" > /etc/apt/sources.list.d/wsl-translinux.list
    # Install Genie
    sudo apt update
    sudo apt install -y systemd-genie
    ```

## Install YunoHost

```bash
# In WSL
# Let's switch to the root user, if you were not already
sudo su
# Initialize the Genie bottle to have systemd running
genie -s
# Your hostname should have been appended with "-wsl"
# Install YunoHost
curl https://install.yunohost.org | bash -s -- -a
```

### Access the command line

Always call `genie -s` while starting your distro.

`wsl -d YunoHost -e genie -s`

## Backup and restore the distro

### Make your first distro backup

As said before, there is no rollback capability. So let's export your fresh distro. In PowerShell:

```bash
cd ~
wsl --export YunoHost .\WSL\YunoHost.tar.gz
```

### In case of crash, delete and restore the whole distro

```bash
cd ~
wsl --unregister YunoHost
wsl --import YunoHost .\WSL\YunoHost .\WSL\YunoHost.tar.gz --version 2
```

{% endif %}

{% if vps_ynh %}

## YunoHost VPS providers

Here are some VPS providers supporting YunoHost natively :

[div class="flex-container"]

[div class="flex-child"]
[[figure caption="Alsace Réseau Neutre - FR"]![](image://vps_ynh_arn.png?height=50)[/figure]](https://arn-fai.net/en/h%C3%A9bergement-alternatif/vps)
[/div]
[div class="flex-child"]
[[figure caption="FAImaison - FR"]![](image://vps_ynh_faimaison.svg?height=50)[/figure]](https://www.faimaison.net/services/vm.html)
[/div]
[div class="flex-child"]
[[figure caption="ECOWAN - FR"]![](image://vps_ynh_ecowan.png?height=50)[/figure]](https://www.ecowan.fr/vps-linux?from-yunohost)
[/div]
[/div]
{% endif %}

{% if at_home %}

## [fa=download /] Download the {{image_type}} image

{% if virtualbox or regular %}
!!! If your host OS is 32 bits, be sure to download the 32-bit image.
{% elseif arm_unsup %}
<a href="https://www.armbian.com/download/" target="_BLANK" type="button" class="btn btn-info col-sm-12" style="background: none;">[fa=external-link] Download the image for your board on Armbian's website</a>

!!! N.B.: you should download the image Armbian Bookworm.
{% endif %}

!!! If you wish to check the validity of our signed images, you can [download our public key](https://forge.yunohost.org/keys/yunohost_bookworm.asc).

{% if internetcube or arm_sup %}
! Current images are from Debian Buster (YunoHost v4.x) and will require that you perform a manual apt update command in SSH or CLI to continue updating.
! Answer Yes to the warning about switching from stable to oldstable.
{% endif %}

<div class="hardware-image">
<div id="cards-list">
</div>
</div>
<template id="image-template">
<div id="{id}" class="card panel panel-default">
        <div class="panel-body text-center pt-2">
            <h3>{name}</h3>
            <div class="card-comment">{comment}</div>
            <div class="card-desc text-center">
<img src="/user/images/{image}" height=100 style="vertical-align:middle">
            </div>
        </div>
        <div class="annotations flex-container">
            <div class="flex-child annotation"><a href="{file}.sha256sum">[fa=barcode] Checksum</a></div>
            <div class="flex-child annotation"><a href="{file}.sig">[fa=tag] Signature</a></div>
        </div>
        <div class="btn-group" role="group">
            <a href="{file}" target="_BLANK" type="button" class="btn btn-info col-sm-12">[fa=download] Download <small>{version}</small></a>
        </div>
</div>
</template>
<script>
var hardware = "{{ hardware|escape('js') }}";
/*
###############################################################################
  Script that loads the infos from JavaScript and creates the corresponding
  cards
###############################################################################
*/
$(document).ready(function () {
    console.log("in load");
    $.getJSON('https://repo.yunohost.org/images/images.json', function (images) {
        $.each(images, function(k, infos) {
            if (infos.hide == true) { return; }
            if (infos.tuto.indexOf(hardware) == -1) return;
            // Fill the template
            html = $('#image-template').html()
             .replace('{id}', infos.id)
             .replace('{name}', infos.name)
             .replace('{comment}', infos.comment || "&nbsp;")
             .replace('%7Bimage%7D', infos.image)
             .replace('{image}', infos.image)
             .replace('{version}', infos.version);
            if (!infos.file.startsWith("http"))
                infos.file="https://repo.yunohost.org/images/"+infos.file;
            html = html.replace(/%7Bfile%7D/g, infos.file).replace(/{file}/g, infos.file);
            if ((typeof(infos.has_sig_and_sums) !== 'undefined') && infos.has_sig_and_sums == false)
            {
                var $html = $(html);
                $html.find(".annotations").html("&nbsp;");
                html = $html[0];
            }
            $('#cards-list').append(html);
        });
    });
});
</script>

{% if not virtualbox %}

{% if arm %}

## ![microSD card with adapter](image://sdcard_with_adapter.png?resize=100,75&class=inline) Flash the {{image_type}} image

{% else %}

## ![USB drive](image://usb_key.png?resize=100,100&class=inline) Flash the YunoHost image

{% endif %}

Now that you downloaded the image of {{image_type}}, you should flash it on {% if arm %}a microSD card{% else %}a USB stick or a CD/DVD.{% endif %}

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="(Recommended) With Etcher"]

Download <a href="https://www.balena.io/etcher/" target="_blank">Etcher</a> for your operating system and install it.

Plug your {% if arm %}SD card{% else %}USB stick{% endif %}, select your image and click "Flash"

![Etcher](image://etcher.gif?resize=700&class=inline)

[/ui-tab]
[ui-tab title="With USBimager"]

Download [USBimager](https://bztsrc.gitlab.io/usbimager/) for your operating system and install it.

Plug your {% if arm %}SD card{% else %}USB stick{% endif %}, select your image and click "Write"

![USBimager](image://usbimager.png?resize=700&class=inline)

[/ui-tab]
[ui-tab title="With dd"]

If you are on GNU/Linux / macOS and know your way around command line, you may also flash your USB stick or SD card with `dd`. You can identify which device corresponds to your USB stick or SD card with `fdisk -l` or `lsblk`. A typical SD card name is something like `/dev/mmcblk0`. BE CAREFUL and make sure you got the right name.

Then run :

```bash
# Replace /dev/mmcblk0 if the name of your device is different...
dd if=/path/to/yunohost.img of=/dev/mmcblk0
```

[/ui-tab]
{% if regular %}
[ui-tab title="Burning a CD/DVD"]
For older devices, you might want to burn a CD/DVD. The software to use depends on your operating system.

- On Windows, use [ImgBurn](http://www.imgburn.com/) to write the image file on the disc

- On macOS, use [Disk Utility](http://support.apple.com/kb/ph7025)

- On GNU/Linux, you have plenty of choices, like [Brasero](https://wiki.gnome.org/Apps/Brasero) or [K3b](http://www.k3b.org/)
[/ui-tab]
{% endif %}
[/ui-tabs]

{% else %}

## Create a new virtual machine

![](image://virtualbox_1.png?class=inline)

! It's okay if you can only have 32-bit versions, just be sure that you downloaded the 32-bit image previously.

## Tweak network settings

! This step is important to properly expose the virtual machine on the network

Go to **Settings** > **Network**:

- Select `Bridged adapter`
- Select your interface's name:
    **wlan0** if you are connected wirelessly, or **eth0** otherwise.

![](image://virtualbox_2.png?class=inline)

{% endif %}

{% if arm %}

## [fa=plug /] Power up the board

- Plug the ethernet cable (one side on your main router, the other on your board).
  - For advanced users willing to configure the board to connect to WiFi instead, see for example [here](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md).
- Plug the SD card in your board
- (Optional) You can connect a screen+keyboard directly on your board if you want to troubleshoot the boot process or if you're more comfortable to "see what happens" or want a direct access to the board.
- Power up the board
- Wait a couple minutes while the board autoconfigure itself during the first boot
- Make sure that your computer (desktop/laptop) is connected to the same local network (i.e. same internet box) as your server.

{% elseif virtualbox %}

## [fa=plug /] Boot up the virtual machine

Start the virtual machine after selecting the YunoHost image.

![](image://virtualbox_2.1.png?class=inline)

! If you encounter the error "VT-x is not available", you probably need to enable Virtualization in the BIOS of your computer.

{% else %}

## [fa=plug /] Boot the machine on your USB stick

- Plug the ethernet cable (one side on your main router, the other on your server).
- Boot up your server with the USB stick or a CD-ROM inserted, and select it as **bootable device** by pressing one of the following keys (hardware specific):
`<ESC>`, `<F9>`, `<F10>`, `<F11>`, `<F12>` or `<DEL>`.
  - N.B. : if the server was previously installed with a recent version of Windows (8+), you first need to tell Windows, to "actually reboot". This can be done somewhere in "Advanced startup options".
{% endif %}

{% if regular or virtualbox %}

## [fa=rocket /] Launch the graphical install

You should see a screen like this:

[figure class="nomargin" caption="Preview of the ISO menu"]
![](image://virtualbox_3.png?class=inline)
[/figure]
[ui-tabs position="top-left" active="0" theme="lite"]

[ui-tab title="Installation classique sur un disque entier"]

!! N.B.: Once you have validated the keyboard layout, the installation will be launched and will completely erase the data on your hard disk!

  1. Select `Graphical install`
  2. Select your language, your location, your keyboard layout, and eventually your timezone.
  3. The installer will then download and install all required packages.

[/ui-tab]
[ui-tab title="Installation in expert mode"]

The YunoHost project simplified the classic installation as much as possible in order to avoid as many people as possible being lost with questions that are too technical or related to specific cases.

With the expert mode installation, you have more possibilities, especially concerning the exact partitioning of your storage media. You can also decide to use the classic mode and [add your disks afterwards](/external_storage).

### Summary of the steps in expert mode

  1. Select `Expert graphical install`.
  2. Select your language, location, keyboard layout and possibly your timezone.
  3. Partition your disks. This is where you can set up a RAID or encrypt all or part of the server.
  4. Specify a possible HTTP proxy to use for the installation of the packages
  5. Specify on which volumes grub should be installed

### Regarding partitioning

In general, we recommend against partitioning `/var`, `/opt`, `/usr`, `/bin`, `/etc`, `/lib`, `/tmp` and `/root` on separate partitions. This will prevent you from having to worry about full partitions that could crash your machine, cause app installations to fail, or even corrupt your databases.

For performance reasons, it is recommended to mount your fastest storage (SSD) on the root `/`.

If you have one or more hard drives to store data, you can choose to mount it on one of these folders depending on your usage.

| Path | Contents |
|--------|---|
| `/home` | User folders accessible via SFTP |
| `/home/yunohost.backup/archives` | YunoHost backups to be placed ideally elsewhere than on the disks that manage the data |
| `/home/yunohost.app` | Heavy data from YunoHost applications (nextcloud, matrix...) |
| `/home/yunohost.multimedia` | Heavy data shared between several applications |
| `/var/mail` | User mail |

If you want flexibility and don't want to (re)size partitions, you can also choose to mount on `/mnt/hdd` and follow this [tutorial to mount all these folders with `mount --bind`](/external_storage).

### About encryption

Be aware that if you encrypt all or part of your disks, you will have to type the passphrase every time you restart your server, which can be a problem if you are not on site. There are however solutions (quite difficult to implement) that allow you to type the passphrase via SSH or via a web page (search for "dropbear encrypted disk").

### About RAID

Keep in mind that:

- the disks in your RAIDs must be of different brands, wear and tear or batches (especially if they are SSDs)
- a RAID 1 (even without a spare) is more reliable than a RAID 5 from a probability point of view
- hardware raids are dependent on the raid card, if the card fails you will need a replacement to read and rebuild the array

[/ui-tab]
[/ui-tabs]
{% endif %}

{% if arm_unsup %}

## [fa=terminal /] Connect to the board

Next you need to [find the local IP address of your server](/finding_the_local_ip) to connect as root user [via SSH](/ssh) with the temporary password `1234`.

```bash
ssh root@192.168.x.xxx
```

{% endif %}

{% endif %}

{% if vps_debian or arm_unsup %}

## [fa=rocket /] Run the install script

- Open a command line prompt on your server (either directly or [through SSH](/ssh))
- Make sure you are root (or type `sudo -i` to become root)
- Run the following command:

```bash
curl https://install.yunohost.org | bash
```

!!! If `curl` is not installed on your system, you might need to install it with `apt install curl`.
!!! Otherwise, if the command does not do anything, you might want to `apt install ca-certificates`

!!! **Note for advanced users concerned with the `curl|bash` approach:** consider reading ["Is curl|bash insecure?"](https://sandstorm.io/news/2015-09-24-is-curl-bash-insecure-pgp-verified-install) on Sandstom's blog, and possibly [this discussion on Hacker News](https://news.ycombinator.com/item?id=12766350&noprocess).

{% endif %}

## [fa=cog /] Proceed with the initial configuration

!!! If you are in the process of restoring a server using a YunoHost backup, you should skip this step and instead [restore the backup instead of the postinstall step](/backup#restoring-during-the-postinstall).

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="From the web interface"]
{%if at_home %}
In an internet browser, type **{% if internetcube %}`https://internetcube.local`{% else %}`https://yunohost.local` (or `yunohost-2.local`, and so on if multiple YunoHost servers are on your network){% endif %}**.

!!! If this doesn't work, you can [look for the the local IP address of your server](/finding_the_local_ip). The address typically looks like `192.168.x.y`, and you should therefore type `https://192.168.x.y` in your browser's address bar.
{% else %}
You can perform the initial configuration with the web interface by typing in the address bar of your web browser **the public IP address of your server**. Typically, your VPS provider should have provided you with the IP of the server.
{% endif %}

! During the first visit, you will very likely encounter a security warning related to the certificate used by the server. For now, your server uses a self-signed certificate. {% if not wsl %}You will later be able to add a certificate automatically recognized by web browsers as described in the [certificate documentation](/certificate). {% endif %} For now, you should add a security exception to accept the current certificate. (Though, PLEASE, do not take the habit of blindly accepting this kind of security alert!)

{% if not internetcube %}
You should then land on this page :

[figure class="nomargin" caption="Preview of the Web initial configuration page"]
![Initial configuration page](image://postinstall_web.png?resize=100%&class=inline)
[/figure]

{% endif %}
[/ui-tab]
[ui-tab title="From the command line"]

You can also perform the postinstallation with the command `yunohost tools postinstall` directly on the server, or [via SSH](/ssh).

[figure class="nomargin" caption="Preview of the command-line post-installation"]
![Initial configuration with CLI](image://postinstall_cli.png?resize=100%&class=inline)
[/figure]

[/ui-tab]
[/ui-tabs]

{% if not internetcube %}

### [fa=globe /] Main domain

This will be the domain used by your server's users to access the **authentication portal**. You can later add other domains, and change which one is the main domain if needed.

{% if not wsl %}

- If you're new to self-hosting and do not already have a domain name, we recommend using a **.nohost.me** / **.noho.st** / **.ynh.fr** (e.g. `homersimpson.nohost.me`). Provided that it's not already taken, the domain will be configured automatically and you won't need any further configuration step. Please note that the downside is that you won't have full-control over the DNS configuration.

- If you already own a domain name, you probably want to use it here. You will later need to configure DNS records as explained [here](/dns_config).

!!! Yes, you *have to* configure a domain name. If you don't have any domain name and don't want a **.nohost.me** / **.noho.st** / **.ynh.fr** either, you can set up a dummy domain such as `yolo.test` and tweak your **local** `/etc/hosts` file such that this dummy domain [points to the appropriate IP, as explained here](/dns_local_network).

{% else %}

You will have to choose a fake domain, since it will not be accessible from outside.
For example, `ynh.wsl`. The tricky part is advertising this domain to your host.

Alter your `C:\Windows\System32\drivers\etc\hosts` file. You should have a line starting by `::1`, update it or add it if needed to get:

```text
::1    ynh.wsl localhost
```

If you want to create subdomains, do not forget to add them in the `hosts` file too:

```text
::1    ynh.wsl subdomain.ynh.wsl localhost
```

{% endif %}

### [fa=key /] First user

The first user is now created at this stage. You should pick a username and a reasonably complex password. (We cannot stress enough that the password should be **robust**!) This user will be added to the Admins group, and will therefore be able to access the user portal, the web admin interface, and connect [via **SSH**](/ssh) or [**SFTP**](/filezilla). Admins will also receive emails sent to `root@yourdomain.tld` and `admin@yourdomain.tld` : these emails may be used to send technical informations or alerts. You can later add additional users, which you can also add to the Admins group.

This user replaces the old `admin` user, which some old documentation page may still refer to. In which case : just replace `admin` with your username.

## [fa=stethoscope /] Run the initial diagnosis

Once the postinstall is done, you should be able to actually log in the web admin interface using the credentials of the first user you just created.

{% if wsl %}
! Reminder: YunoHost in WSL will likely not be reachable from outside, and real domains and certificates won't be able to be assigned to it.
{% endif %}
{% if virtualbox %}
! Reminder: YunoHost in VirtualBox will likely not be reachable from outside without further network configuration in Virtualbox's settings. The diagnosis will probably complain about this.
{% endif %}

The diagnosis system is meant to provide an easy way to validate that all critical aspects of your server are properly configured - and guide you in how to fix issues. The diagnosis will run twice a day and send an alert if issues are detected.

!!! N.B. : **don't run away** ! The first time you run the diagnosis, it is quite expected to see a bunch of yellow/red alerts because you typically need to [configure DNS records](/dns_config) (if not using a `.nohost.me`/`noho.st`/`ynh.fr` domain), add a swapfile if not enough ram {% if at_home %} and/or [port forwarding](/isp_box_config){% endif %}.

!!! If an alert is not relevant (for example because you don't intend on using a specific feature), it is perfectly fine to flag the issue as 'ignored' by going in the webadmin > Diagnosis, and clicking the ignore button for this specifc issue.

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="(Recommended) From the web interface"]
To run a diagnosis, go on Web Admin in the Diagnosis section. Click Run initial diagnosis and you should get a screen like this :

[figure class="nomargin" caption="Preview of the diagnostic panel"]
![](image://diagnostic.png?resize=100%&class=inline)
[/figure]

[/ui-tab]
[ui-tab title="From the command line"]

```bash
yunohost diagnosis run
yunohost diagnosis show --issues --human-readable
```

[/ui-tab]
[/ui-tabs]

## [fa=lock /] Get a Let's Encrypt certificate

Once you configured DNS records and port forwarding (if needed), you should be able to install a Let's Encrypt certificate. This will get rid of the spooky security warning from earlier for new visitors.

For more detailed instructions, or to lean more about SSL/TLS certificates, see [the corresponding page here](/certificate).

[ui-tabs position="top-left" active="0" theme="lite"]
[ui-tab title="From the web interface"]

Go in Domains > Click on your domain > SSL Certificate

[figure class="nomargin" caption="Preview of the diagnostic panel"]
![](image://certificate-before-LE.png?resize=100%&class=inline)
[/figure]

[/ui-tab]
[ui-tab title="From the command line"]

```bash
yunohost domain cert install
```

[/ui-tab]
[/ui-tabs]

## ![](image://tada.png?resize=32&classes=inline) Congratz!

You now have a pretty well configured server. If you're new to YunoHost, we recommend to have a look at [the guided tour](/overview). You should also be able to [install your favourite applications](/apps). Don't forget to [plan backups](/backup) !

{% endif %}
{% endif %}
